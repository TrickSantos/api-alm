import { MiddlewareBuilder } from '@nestjs/core';
import { Queue } from 'bull';
export declare class EventoModule {
    private queue;
    constructor(queue: Queue);
    configure(consumer: MiddlewareBuilder): void;
}
