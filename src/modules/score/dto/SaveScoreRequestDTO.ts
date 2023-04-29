import { ApiProperty } from '@nestjs/swagger';

class SaveScoreRequestDTO {
  @ApiProperty()
  readonly score: number;
}

export default SaveScoreRequestDTO;
