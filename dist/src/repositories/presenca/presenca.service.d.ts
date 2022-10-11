import { PrismaService } from '@prisma/prisma.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';
export declare class PresencaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(presenca: CreatePresencaDto): Promise<void>;
    findAll(): Promise<(import(".prisma/client").presenca & {
        clube: import(".prisma/client").clube;
        usuario: import(".prisma/client").usuario;
        evento: import(".prisma/client").evento;
    })[]>;
    getPresencasByEventId(id: number): Promise<{
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
