import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoGateway } from './evento.gateway';
import { PrismaModule } from '@prisma/prisma.module';
import { BullModule, InjectQueue } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventoProducerService } from './jobs/evento.producer';
import { EventoConsumer } from './jobs/evento.consumer';
import { MiddlewareBuilder } from '@nestjs/core';
import { Queue } from 'bull';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: 'evento',
    }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  providers: [
    EventoGateway,
    EventoService,
    EventoProducerService,
    EventoConsumer,
  ],
})
export class EventoModule {
  constructor(@InjectQueue('evento') private queue: Queue) {}

  configure(consumer: MiddlewareBuilder) {
    const { router } = createBullBoard([new BullAdapter(this.queue)]);
    consumer.apply(router).forRoutes('/admin/queues');
  }
}
