import { ApiProperty } from '@nestjs/swagger';

class LoginResponseDTO {
  @ApiProperty()
  token: string;
}

export default LoginResponseDTO;
