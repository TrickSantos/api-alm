import { Server } from 'socket.io';
import { PresencaService } from './presenca.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';
export declare class PresencaGateway {
    private readonly presencaService;
    constructor(presencaService: PresencaService);
    server: Server;
    create(createPresencaDto: CreatePresencaDto): Promise<{
        status: string;
        message: string[];
    }>;
    findAll(): Promise<(import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        usuario: import(".prisma/client").usuario;
        evento: import(".prisma/client").evento;
    })[]>;
    getPresences(id: number): Promise<{
        nome: string;
        _count: {
            membros: number;
            presentes: number;
        };
    }[]>;
    findOne(id: number): Promise<import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        usuario: import(".prisma/client").usuario;
        evento: import(".prisma/client").evento;
    }>;
    remove(id: number): Promise<void>;
}
