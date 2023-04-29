import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Observable, map, mergeMap } from 'rxjs';

import { JwtGuard } from 'src/common/guards/jwt.guard';
import INJECTABLES from 'src/common/injectables';

import { ScoreService } from './score';
import SaveScoreRequestDTO from './dto/SaveScoreRequestDTO';
import SaveScoreResponseDTO from './dto/SaveScoreResponseDTO';
import GetLeaderboardResponseDTO from './dto/GetLeaderboardResponseDTO';
import { UserService } from '../user/user';
import UserDTO from './dto/UserDTO';

@ApiTags('Score')
@Controller('score')
export class ScoreController implements OnModuleInit {
  @Inject(INJECTABLES.SCORE_CLIENT)
  private readonly scoreClient: ClientGrpc;

  @Inject(INJECTABLES.USER_CLIENT)
  private readonly userClient: ClientGrpc;

  private scoreService: ScoreService;
  private userService: UserService;

  onModuleInit() {
    this.scoreService =
      this.scoreClient.getService<ScoreService>('ScoreService');

    this.userService = this.userClient.getService<UserService>('UserService');
  }

  @UseGuards(JwtGuard)
  @Post('saveScore')
  saveScore(
    @Req() request: Request,
    @Body() body: SaveScoreRequestDTO,
  ): Observable<SaveScoreResponseDTO> {
    return this.scoreService.SaveScore({
      userId: request.user.userId,
      score: body.score,
    });
  }

  @UseGuards(JwtGuard)
  @Get('getLeaderboard')
  @ApiOkResponse({ type: GetLeaderboardResponseDTO })
  @ApiOperation({ operationId: 'getLeaderboard' })
  getLeaderboard(
    @Req() request: Request,
  ): Observable<GetLeaderboardResponseDTO> {
    return this.scoreService.GetScoreMap({ userId: request.user.userId }).pipe(
      mergeMap((leaderboardResponse) => {
        return this.userService
          .GetUserInfoMap({
            userIdList: [
              ...Object.keys(leaderboardResponse?.scoreMap || {}),
              ...Object.keys(leaderboardResponse?.scoreMapSelf || {}),
            ],
          })
          .pipe(
            map((userProfileResponse) => {
              const response = new GetLeaderboardResponseDTO();
              response.leaderboardData = [];
              response.leaderboardDataSelf = [];

              Object.keys(leaderboardResponse?.scoreMap || {}).forEach(
                (userId) => {
                  const userData = new UserDTO();

                  userData.name =
                    userProfileResponse.userMap[userId].playerName;
                  userData.country =
                    userProfileResponse.userMap[userId].country;
                  userData.money = leaderboardResponse.scoreMap[userId].score;
                  userData.rank = leaderboardResponse.scoreMap[userId].rank;
                  userData.isSelf = request.user.userId === userId;

                  response.leaderboardData.push(userData);
                },
              );

              Object.keys(leaderboardResponse?.scoreMapSelf || {}).forEach(
                (userId) => {
                  const userData = new UserDTO();

                  userData.name =
                    userProfileResponse.userMap[userId].playerName;
                  userData.country =
                    userProfileResponse.userMap[userId].country;
                  userData.money =
                    leaderboardResponse.scoreMapSelf[userId].score;
                  userData.rank = leaderboardResponse.scoreMapSelf[userId].rank;
                  userData.isSelf = request.user.userId === userId;

                  response.leaderboardDataSelf.push(userData);
                },
              );

              response.leaderboardData.sort((a, b) => a.rank - b.rank);
              response.leaderboardDataSelf.sort((a, b) => a.rank - b.rank);

              return response;
            }),
          );
      }),
    );
  }
}
