import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'repositories/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validate(email: string, pass: string) {
    const user = await this.usuarioService.validateUser(email);

    if (!user) throw new WsException('Usuario não encontrado');

    const passValid = await bcrypt.compare(pass, user.password);

    if (passValid) {
      return user;
    } else {
      throw new WsException('Email ou Senha invalidos');
    }
  }

  async login(email: string) {
    console.log('login');
    const usuario = await this.usuarioService.findOne(email);
    return {
      token: this.jwtService.sign(usuario),
      usuario,
    };
  }
}
