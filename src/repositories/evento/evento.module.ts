import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoGateway } from './evento.gateway';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [EventoGateway, EventoService],
})
export class EventoModule {}
