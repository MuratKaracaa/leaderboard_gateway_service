import { ApiProperty } from '@nestjs/swagger';

import UserDTO from './UserDTO';

class GetLeaderboardResponseDTO {
  @ApiProperty({ type: UserDTO, isArray: true })
  leaderboardData: Array<UserDTO>;
  @ApiProperty({ type: UserDTO, isArray: true })
  leaderboardDataSelf: Array<UserDTO>;
}

export default GetLeaderboardResponseDTO;
