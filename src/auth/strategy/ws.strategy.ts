import { PassportStrategy } from '@nestjs/passport';
import { WsException } from '@nestjs/websockets';
import configuration from 'config/configuration';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioService } from 'repositories/usuario/usuario.service';

export class WsJwtStrategy extends PassportStrategy(Strategy, 'wsjwt') {
  constructor(private readonly userService: UsuarioService) {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('bearerToken'),
      secretOrKey: configuration().jwtConstants.secret,
    });
  }
  async validate(payload: any) {
    console.log('validate');
    try {
      return this.userService.findOne(payload.email);
    } catch (error) {
      throw new WsException('Não encontrado');
    }
  }
}
