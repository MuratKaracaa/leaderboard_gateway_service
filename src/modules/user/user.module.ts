import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ServicesModule } from '../services/services.module';
import AuthUtil from 'src/common/util/auth.util';

@Module({
  controllers: [UserController],
  imports: [ServicesModule],
  providers: [AuthUtil],
})
export class UserModule {}
