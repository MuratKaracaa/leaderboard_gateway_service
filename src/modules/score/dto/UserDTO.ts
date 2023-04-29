import { ApiProperty } from '@nestjs/swagger';

class UserDTO {
  @ApiProperty()
  rank: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  money: number;
  @ApiProperty()
  isSelf: boolean;
}

export default UserDTO;
