import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
export declare class WsAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
    verifyToken(token: string): string | false | jwt.JwtPayload;
}
