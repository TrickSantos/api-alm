import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AuthGateway {
  constructor(private readonly authService: AuthService) {}

  @SubscribeMessage('login')
  async login(@MessageBody() login: LoginDTO) {
    const res = await this.authService.login(login.email);
    return res;
  }
}
