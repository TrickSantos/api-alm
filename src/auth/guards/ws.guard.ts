import { CanActivate, ExecutionContext } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import configuration from 'config/configuration';
import * as jwt from 'jsonwebtoken';

export class WsAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    try {
      const client = context.switchToWs().getClient().handshake;

      const payload = this.verifyToken(client.auth.token);

      return Boolean(payload);
    } catch (error) {
      throw new WsException(error.message);
    }
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, configuration().jwtConstants.secret);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
