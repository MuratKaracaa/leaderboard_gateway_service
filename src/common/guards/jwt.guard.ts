import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

import AuthUtil from '../util/auth.util';

@Injectable()
export class JwtGuard implements CanActivate {
  @Inject()
  private readonly authUtil: AuthUtil;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    try {
      const token = request.headers.authorization.split(' ').at(1);

      const { sub, exp } = await this.authUtil.decodeToken(token);

      request.user = {
        userId: sub,
      };

      return Date.now() <= exp;
    } catch (error) {
      return false;
    }
  }
}
