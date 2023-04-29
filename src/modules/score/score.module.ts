import { Module } from '@nestjs/common';

import AuthUtil from 'src/common/util/auth.util';

import { ScoreController } from './score.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  controllers: [ScoreController],
  providers: [AuthUtil],
  imports: [ServicesModule],
})
export class ScoreModule {}
