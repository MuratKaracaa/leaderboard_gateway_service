import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '../user/user.module';
import { ScoreModule } from '../score/score.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    UserModule,
    ScoreModule,
    ServicesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
