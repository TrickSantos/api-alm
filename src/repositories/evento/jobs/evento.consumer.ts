import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { evento } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { Job } from 'bull';

@Processor('evento')
export class EventoConsumer {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  private readonly logger = new Logger(EventoConsumer.name);

  @Process('inicio')
  async inicio(job: Job<evento>) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id,
      },
      data: {
        ativo: true,
      },
    });
    this.eventEmitter.emit('evento:update');
  }

  @Process('fim')
  async fim(job: Job<evento>) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id,
      },
      data: {
        ativo: false,
      },
    });
    this.eventEmitter.emit('evento:update');
  }

  @OnQueueActive()
  onActive(job: Job<evento>) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} to status ${
        job.data.ativo ? 'ativo' : 'inativo'
      }...`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job<evento>) {
    this.logger.log(
      `Completed job ${job.id} of type ${job.name} to status ${
        job.data.ativo ? 'ativo' : 'inativo'
      }...`,
    );
  }
}
