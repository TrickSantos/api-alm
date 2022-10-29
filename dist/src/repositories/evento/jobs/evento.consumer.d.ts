import { EventEmitter2 } from '@nestjs/event-emitter';
import { evento } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { Job } from 'bull';
export declare class EventoConsumer {
    private prisma;
    private eventEmitter;
    constructor(prisma: PrismaService, eventEmitter: EventEmitter2);
    private readonly logger;
    inicio(job: Job<evento>): Promise<void>;
    fim(job: Job<evento>): Promise<void>;
    onActive(job: Job<evento>): void;
    onComplete(job: Job<evento>): void;
}
