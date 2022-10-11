import { PrismaService } from '@prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
export declare class EventoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(evento: CreateEventoDto): Promise<void>;
    findAll(): Promise<(import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").evento & {
        presentes: import(".prisma/client").presenca[];
    }>;
    update(id: number, evento: UpdateEventoDto): Promise<import(".prisma/client").evento>;
    remove(id: number): Promise<void>;
}
