import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { evento } from '@prisma/client';
import { Queue } from 'bull';
import { DateTime } from 'luxon';

@Injectable()
class EventoProducerService {
  constructor(@InjectQueue('evento') private queue: Queue) {}

  async execute(evento: evento) {
    const inicioDelay = DateTime.fromJSDate(evento.inicio)
      .setZone('America/Cuiaba')
      .diffNow().milliseconds;

    const fimDelay = DateTime.fromJSDate(evento.fim)
      .setZone('America/Cuiaba')
      .diffNow().milliseconds;

    await this.queue.add('inicio', evento, {
      delay: inicioDelay,
    });

    await this.queue.add('fim', evento, {
      delay: fimDelay,
    });
  }
}

export { EventoProducerService };
