import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { DateTime } from 'luxon';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventoProducerService } from './jobs/evento.producer';

@Injectable()
export class EventoService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
    private schedulerRegistry: SchedulerRegistry,
    private eventoQueue: EventoProducerService,
  ) {}

  private readonly logger = new Logger(EventoService.name);

  async create(evento: CreateEventoDto) {
    const created = await this.prisma.evento.create({
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim,
        ativo: false,
      },
    });

    await this.eventoQueue.execute(created);
  }

  async findAll() {
    return await this.prisma.evento.findMany({
      include: { presentes: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.evento.findUniqueOrThrow({
      where: { id },
      include: { presentes: true },
    });
  }

  async update(id: number, evento: UpdateEventoDto) {
    return await this.prisma.evento.update({
      where: { id },
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.evento.delete({
      where: { id },
    });
  }

  addInicioEventoCronJob(
    name: string,
    cronTime: string | Date | DateTime,
    id: number,
  ) {
    const job = new CronJob(
      cronTime,
      async () => {
        await this.prisma.evento.update({
          where: {
            id,
          },
          data: {
            ativo: true,
          },
        });
        this.eventEmitter.emit('evento:update');
        this.logger.log(`Evento com id: ${id} foi marcado como ativo`);
      },
      () => this.logger.log(`Evento com id: ${id} foi marcado como ativo`),
      true,
      'America/Cuiaba',
    );
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Evento inicio adicionado para ${cronTime}`);
  }

  addFimEventoCronJob(
    name: string,
    cronTime: string | Date | DateTime,
    id: number,
  ) {
    const job = new CronJob(
      cronTime,
      async () => {
        await this.prisma.evento.update({
          where: {
            id,
          },
          data: {
            ativo: false,
          },
        });
        this.eventEmitter.emit('evento:update');
        this.logger.log(`Evento com id: ${id} foi marcado como inativo`);
      },
      () => this.logger.log(`Evento com id: ${id} foi marcado como inativo`),
      true,
      'America/Cuiaba',
    );
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Evento fim adicionado para ${cronTime}`);
  }
}
