import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';

@Catch(WsException, BadRequestException)
export class WsExceptionFilter extends BaseWsExceptionFilter {
  catch(exception: WsException | BadRequestException, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const callback = host.getArgByIndex(2);
      const response = exception.getResponse() as any;
      if (callback) {
        callback({ status: 'error', message: response.message });
      }
    } else {
      super.catch(exception, host);
    }
  }
}
