import { Server } from 'socket.io';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
export declare class EventoGateway {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    server: Server;
    create(createEventoDto: CreateEventoDto): Promise<{
        status: string;
        message: string[];
    }>;
    findAll(): Promise<(import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    }>;
    update(updateEventoDto: UpdateEventoDto): Promise<{
        status: string;
        message: string[];
    }>;
    remove(id: number): Promise<void>;
}
