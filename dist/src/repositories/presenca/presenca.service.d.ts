import { PrismaService } from '@prisma/prisma.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';
export declare class PresencaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(presenca: CreatePresencaDto): Promise<{
        logo: string;
        nome: string;
        id: number;
        _count: {
            membros: number;
            presentes: number;
        };
    }>;
    findAll(): Promise<(import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        evento: import(".prisma/client").evento;
        usuario: import(".prisma/client").usuario;
    })[]>;
    getPresencasByEventId(id: number): Promise<{
        id: number;
        logo: string;
        nome: string;
        porcentagem: number;
    }[]>;
    findOne(id: number): Promise<import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        evento: import(".prisma/client").evento;
        usuario: import(".prisma/client").usuario;
    }>;
    remove(id: number): Promise<void>;
}
