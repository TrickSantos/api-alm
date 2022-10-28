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

    const clube = await this.prisma.clube.findFirst({
      select: {
        nome: true,
        logo: true,
        id: true,
        _count: {
          select: {
            presentes: {
              where: {
                eventoId: presenca.eventoId,
                usuario: {
                  funcao: {
                    in: ['desbravador', 'diretoria'],
                  },
                },
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
      where: {
        id: presenca.clubeId,
      },
      orderBy: {
        presentes: {
          _count: 'desc',
        },
      },
    });

    const porcentagem = Math.floor(
      (clube._count.presentes / clube._count.membros) * 100,
    );

    if (porcentagem === 100) {
      return clube;
    } else {
      return;
    }
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
                usuario: {
                  funcao: {
                    in: ['desbravador', 'diretoria'],
                  },
                },
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
    });

    const res = clubes.map((clube) => {
      const porcentagem = Math.floor(
        (clube._count.presentes / clube._count.membros) * 100,
      );

      return {
        id: clube.id,
        logo: clube.logo,
        nome: clube.nome,
        porcentagem,
      };
    });

    return res;
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
