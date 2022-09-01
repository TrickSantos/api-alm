import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventoService {
  constructor(private prisma: PrismaService) {}

  async create(evento: CreateEventoDto) {
    await this.prisma.evento.create({
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim,
      },
    });
  }

  async findAll() {
    return await this.prisma.evento.findMany({
      include: { presentes: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.evento.findUniqueOrThrow({
      where: { id },
      include: { presentes: true },
    });
  }

  async update(id: number, evento: UpdateEventoDto) {
    return await this.prisma.evento.update({
      where: { id },
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.evento.delete({
      where: { id },
    });
  }
}
