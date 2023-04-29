import { ApiProperty } from '@nestjs/swagger';

class LoginRequestDTO {
  @ApiProperty()
  readonly userName: string;
  @ApiProperty()
  readonly password: string;
}

export default LoginRequestDTO;
