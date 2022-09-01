import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioGateway } from './usuario.gateway';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsuarioGateway, UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
