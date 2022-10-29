import { ArgumentsHost, BadRequestException } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
export declare class WsExceptionFilter extends BaseWsExceptionFilter {
    catch(exception: WsException | BadRequestException, host: ArgumentsHost): void;
}
