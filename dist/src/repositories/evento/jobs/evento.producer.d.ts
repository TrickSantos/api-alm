import { evento } from '@prisma/client';
import { Queue } from 'bull';
declare class EventoProducerService {
    private queue;
    constructor(queue: Queue);
    execute(evento: evento): Promise<void>;
}
export { EventoProducerService };
