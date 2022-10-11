import { PrismaService } from '@prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { IndexUsuarioDto } from './dto/index-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    private exclude;
    create(usuario: CreateUsuarioDto): Promise<void>;
    findAll(data: IndexUsuarioDto): Promise<{
        nome: string;
        codigo: string;
        id: number;
        email: string;
        funcao: string;
        idade: number;
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
        clubeId: number;
    }[]>;
    findById(codigo: string): Promise<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }>;
    findOne(email: string): Promise<Omit<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }, "password">>;
    validateUser(email: string): Promise<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }>;
    update(id: number, usuario: UpdateUsuarioDto): Promise<Omit<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }, "password">>;
    remove(id: number): Promise<import(".prisma/client").usuario>;
}
