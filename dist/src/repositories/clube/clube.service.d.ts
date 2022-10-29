import { PrismaService } from '@prisma/prisma.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';
export declare class ClubeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(clube: CreateClubeDto): Promise<void>;
    findAll(): Promise<(import(".prisma/client").clube & {
        membros: import(".prisma/client").usuario[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").clube & {
        membros: import(".prisma/client").usuario[];
    }>;
    update(id: number, clube: UpdateClubeDto): Promise<import(".prisma/client").clube & {
        membros: import(".prisma/client").usuario[];
    }>;
    remove(id: number): Promise<void>;
}
