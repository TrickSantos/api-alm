import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { IndexUsuarioDto } from './dto/index-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  private exclude<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  async create(usuario: CreateUsuarioDto) {
    const password = await bcrypt.hash(usuario.password, 12);
    await this.prisma.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        password,
        funcao: usuario.funcao,
        clubeId: usuario.clubeId,
        aniversario: usuario.aniversario,
        foto: usuario.foto,
      },
    });
  }

  async findAll(data: IndexUsuarioDto) {
    return await this.prisma.usuario.findMany({
      where: data,
      select: {
        id: true,
        clube: true,
        nome: true,
        aniversario: true,
        clubeId: true,
        email: true,
        foto: true,
        presencas: true,
        ativo: false,
        password: false,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.usuario.findUniqueOrThrow({
      where: { id },
      include: { clube: true, presencas: true },
    });
  }

  async findOne(email: string) {
    const user = await this.prisma.usuario.findUniqueOrThrow({
      where: { email },
      include: { clube: true, presencas: true },
    });
    return this.exclude(user, 'password');
  }

  async validateUser(email: string) {
    return await this.prisma.usuario.findUniqueOrThrow({
      where: { email },
      include: { clube: true, presencas: true },
    });
  }

  async update(id: number, usuario: UpdateUsuarioDto) {
    const user = await this.prisma.usuario.update({
      where: { id },
      data: {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.password,
        clubeId: usuario.clubeId,
        aniversario: usuario.aniversario,
        foto: usuario.foto,
      },
      include: { clube: true, presencas: true },
    });
    return this.exclude(user, 'password');
  }

  async remove(id: number) {
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}
