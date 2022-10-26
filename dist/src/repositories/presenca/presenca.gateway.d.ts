import { Server } from 'socket.io';
import { PresencaService } from './presenca.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';
import { Presencas } from './dto/presenca.dto';
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
        evento: import(".prisma/client").evento;
        usuario: import(".prisma/client").usuario;
    })[]>;
    getPresences(id: number): Promise<{
        logo: string;
        nome: string;
        id: number;
        _count: {
            membros: number;
            presentes: number;
        };
    }[]>;
    findOne(id: number): Promise<import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        evento: import(".prisma/client").evento;
        usuario: import(".prisma/client").usuario;
    }>;
    remove(id: number): Promise<void>;
    ganhador(presenca: Presencas): void;
}
