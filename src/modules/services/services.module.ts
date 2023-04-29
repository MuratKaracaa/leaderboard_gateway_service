import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import INJECTABLES from 'src/common/injectables';

import { protobufPackage as scorePackage } from 'src/modules/score/score';
import { protobufPackage as userPackage } from 'src/modules/user/user';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: INJECTABLES.SCORE_CLIENT,
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          const isProd = config.get('NODE_ENV') === 'production';

          return {
            transport: Transport.GRPC,
            options: {
              package: scorePackage,
              protoPath: join(__dirname, 'protos/score.proto'),
              url: isProd
                ? config.get('SCORE_SERVICE_URL_PROD')
                : config.get('SCORE_SERVICE_URL_LOCAL'),
            },
          };
        },
      },
      {
        name: INJECTABLES.USER_CLIENT,
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          const isProd = config.get('NODE_ENV') === 'production';
          console.log(config.get('USER_SERVICE_URL_PROD'));
          return {
            transport: Transport.GRPC,
            options: {
              package: userPackage,
              protoPath: join(__dirname, 'protos/user.proto'),
              url: isProd
                ? config.get('USER_SERVICE_URL_PROD')
                : config.get('USER_SERVICE_URL_LOCAL'),
            },
          };
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class ServicesModule {}
