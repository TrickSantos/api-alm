import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';

@Injectable()
export class PresencaService {
  constructor(private prisma: PrismaService) {}

  async create(presenca: CreatePresencaDto) {
    await this.prisma.presenca.upsert({
      where: {
        eventoId_usuarioId_clubeId: {
          clubeId: presenca.clubeId,
          eventoId: presenca.eventoId,
          usuarioId: presenca.usuarioId,
        },
      },
      create: {
        eventoId: presenca.eventoId,
        clubeId: presenca.clubeId,
        usuarioId: presenca.usuarioId,
      },
      update: {
        eventoId: presenca.eventoId,
        clubeId: presenca.clubeId,
        usuarioId: presenca.usuarioId,
      },
    });
  }

  async findAll() {
    return await this.prisma.presenca.findMany({
      include: { clube: true, evento: true, usuario: true },
    });
  }

  async getPresencasByEventId(id: number) {
    const clubes = await this.prisma.clube.findMany({
      select: {
        nome: true,
        logo: true,
        id: true,
        _count: {
          select: {
            presentes: {
              where: {
                eventoId: id,
              },
            },
            membros: {
              where: {
                funcao: {
                  in: ['desbravador', 'diretoria'],
                },
              },
            },
          },
        },
      },
      orderBy: {
        presentes: {
          _count: 'desc',
        },
      },
      take: 5,
    });

    return clubes;
  }

  async findOne(id: number) {
    return await this.prisma.presenca.findUniqueOrThrow({
      where: { id },
      include: { clube: true, evento: true, usuario: true },
    });
  }

  async remove(id: number) {
    await this.prisma.presenca.delete({
      where: { id },
    });
  }
}
