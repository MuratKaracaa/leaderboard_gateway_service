import { Controller, OnModuleInit } from '@nestjs/common';
import { Body, Post, Inject, UseGuards, Get } from '@nestjs/common/decorators';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';
import { writeFileSync } from 'fs';

import INJECTABLES from 'src/common/injectables';
import { JwtGuard } from 'src/common/guards/jwt.guard';

import { UserService } from './user';
import LoginRequestDTO from './dto/LoginRequestDTO';
import LoginResponseDTO from './dto/LoginResponseDTO';

@ApiTags('User')
@Controller('user')
export class UserController implements OnModuleInit {
  @Inject(INJECTABLES.USER_CLIENT)
  private readonly client: ClientGrpc;
  private service: UserService;

  onModuleInit() {
    this.service = this.client.getService('UserService');
  }

  @Post('login')
  @ApiOkResponse({ type: LoginResponseDTO })
  @ApiOperation({ operationId: 'login' })
  login(@Body() request: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.service.Login(request).pipe(
      map((x) => {
        const response = new LoginResponseDTO();
        response.token = x.token;
        return response;
      }),
    );
  }

  @Get('handshake')
  @ApiOkResponse()
  @ApiOperation({ operationId: 'handshake' })
  @UseGuards(JwtGuard)
  handshake() {
    return {};
  }

  // for seeding purposes only
  @Post('loginMany')
  loginMany() {
    for (let index = 0; index < 5000; index++) {
      const userName = `Mock User ${index}`;
      const serviceResponse = this.service.Login({
        userName,
        password: '12345',
      });

      serviceResponse.subscribe((x) => {
        writeFileSync('./tokens.txt', `'${x.token}',\n`, {
          encoding: 'utf-8',
          flag: 'a',
        });
      });
    }

    return {};
  }
}
