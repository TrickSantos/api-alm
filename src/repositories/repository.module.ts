import { Module } from '@nestjs/common';
import { ClubeModule } from './clube/clube.module';
import { EventoModule } from './evento/evento.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ClubeModule, UsuarioModule, EventoModule],
  exports: [ClubeModule, UsuarioModule, EventoModule],
})
export class RepositoryModule {}
