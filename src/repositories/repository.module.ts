import { Module } from '@nestjs/common';
import { ClubeModule } from './clube/clube.module';
import { EventoModule } from './evento/evento.module';
import { PresencaModule } from './presenca/presenca.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ClubeModule, UsuarioModule, EventoModule, PresencaModule],
  exports: [ClubeModule, UsuarioModule, EventoModule, PresencaModule],
})
export class RepositoryModule {}
