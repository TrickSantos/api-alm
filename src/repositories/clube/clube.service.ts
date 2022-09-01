import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';

@Injectable()
export class ClubeService {
  constructor(private prisma: PrismaService) {}

  async create(clube: CreateClubeDto) {
    await this.prisma.clube.create({
      data: {
        cidade: clube.cidade,
        nome: clube.nome,
        logo: clube.logo,
      },
    });
  }

  async findAll() {
    return await this.prisma.clube.findMany({
      include: { membros: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.clube.findUnique({
      where: { id },
      include: { membros: true },
    });
  }

  async update(id: number, clube: UpdateClubeDto) {
    return await this.prisma.clube.update({
      where: { id },
      data: {
        cidade: clube.cidade,
        nome: clube.nome,
        ativo: clube.ativo,
        logo: clube.logo,
      },
      include: {
        membros: true,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.clube.delete({
      where: { id },
    });
  }
}
