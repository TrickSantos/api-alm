import { Server } from 'socket.io';
import { ClubeService } from './clube.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';
export declare class ClubeGateway {
    private readonly clubeService;
    constructor(clubeService: ClubeService);
    server: Server;
    create(createClubeDto: CreateClubeDto): Promise<{
        status: string;
        message: string[];
    }>;
    findAll(): Promise<(import(".prisma/client").clube & {
        membros: import(".prisma/client").usuario[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").clube & {
        membros: import(".prisma/client").usuario[];
    }>;
    update(updateClubeDto: UpdateClubeDto): Promise<{
        status: string;
        message: string[];
    }>;
    remove(id: number): Promise<void>;
}
