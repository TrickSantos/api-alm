import { PrismaService } from '@prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { DateTime } from 'luxon';
import { SchedulerRegistry } from '@nestjs/schedule';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventoProducerService } from './jobs/evento.producer';
export declare class EventoService {
    private prisma;
    private eventEmitter;
    private schedulerRegistry;
    private eventoQueue;
    constructor(prisma: PrismaService, eventEmitter: EventEmitter2, schedulerRegistry: SchedulerRegistry, eventoQueue: EventoProducerService);
    private readonly logger;
    create(evento: CreateEventoDto): Promise<void>;
    findAll(): Promise<(import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    }>;
    update(id: number, evento: UpdateEventoDto): Promise<import(".prisma/client").evento>;
    remove(id: number): Promise<void>;
    addInicioEventoCronJob(name: string, cronTime: string | Date | DateTime, id: number): void;
    addFimEventoCronJob(name: string, cronTime: string | Date | DateTime, id: number): void;
}
