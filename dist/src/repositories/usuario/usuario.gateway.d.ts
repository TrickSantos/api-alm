import { Server } from 'socket.io';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { IndexUsuarioDto } from './dto/index-usuario.dto';
export declare class UsuarioGateway {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    server: Server;
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        status: string;
        message: string[];
    }>;
    findAll(data: IndexUsuarioDto): Promise<{
        clube: import(".prisma/client").clube;
        nome: string;
        codigo: string;
        id: number;
        funcao: string;
        idade: number;
        clubeId: number;
        email: string;
        presencas: import(".prisma/client").presenca[];
    }[]>;
    findOne(codigo: string): Promise<(import(".prisma/client").usuario & {
        clube: import(".prisma/client").clube;
        presencas: import(".prisma/client").presenca[];
    }) | {
        status: string;
        message: string[];
    }>;
    update(updateUsuarioDto: UpdateUsuarioDto): Promise<{
        status: string;
        message: string[];
    }>;
    remove(id: number): Promise<void>;
}
