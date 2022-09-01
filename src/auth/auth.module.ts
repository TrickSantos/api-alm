import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'repositories/usuario/usuario.module';
import { AuthGateway } from './auth.gateway';
import { AuthService } from './auth.service';
import { WsAuthGuard } from './guards/ws.guard';
import { LocalStrategy } from './strategy/local.strategy';
import { WsJwtStrategy } from './strategy/ws.strategy';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '3d' },
      }),
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    AuthGateway,
    WsJwtStrategy,
    WsAuthGuard,
  ],
  exports: [AuthService, WsAuthGuard],
})
export class AuthModule {}
