import { Injectable } from '@nestjs/common';
import { JwtPayload, Secret, VerifyOptions, verify } from 'jsonwebtoken';
import { promisify } from 'util';

@Injectable()
class AuthUtil {
  private readonly verifyAsync: (
    token: string,
    secretOrPublicKey: Secret,
    options: VerifyOptions,
  ) => Promise<JwtPayload> = promisify(verify);

  async decodeToken(token: string): Promise<JwtPayload> {
    const payload = await this.verifyAsync(token, process.env.JWT_KEY, {
      algorithms: ['HS256'],
    });
    return payload;
  }
}

export default AuthUtil;
