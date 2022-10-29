"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    exclude(user, ...keys) {
        for (const key of keys) {
            delete user[key];
        }
        return user;
    }
    async create(usuario) {
        var _a;
        const password = await bcrypt.hash((_a = usuario.password) !== null && _a !== void 0 ? _a : 'senha', 12);
        await this.prisma.usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                password,
                clubeId: usuario.clubeId,
                funcao: usuario.funcao,
                ativo: usuario.ativo,
                codigo: usuario.codigo,
            },
        });
    }
    async findAll(data) {
        return await this.prisma.usuario.findMany({
            where: data,
            select: {
                id: true,
                codigo: true,
                funcao: true,
                clube: true,
                nome: true,
                clubeId: true,
                email: true,
                presencas: true,
                ativo: false,
                password: false,
            },
        });
    }
    async findById(codigo) {
        return await this.prisma.usuario.findFirst({
            where: { codigo },
            include: { clube: true, presencas: true },
        });
    }
    async findOne(email) {
        const user = await this.prisma.usuario.findUniqueOrThrow({
            where: { email },
            include: { clube: true, presencas: true },
        });
        return this.exclude(user, 'password');
    }
    async validateUser(email) {
        return await this.prisma.usuario.findUniqueOrThrow({
            where: { email },
            include: { clube: true, presencas: true },
        });
    }
    async update(id, usuario) {
        const user = await this.prisma.usuario.update({
            where: { id },
            data: {
                nome: usuario.nome,
                email: usuario.email,
                password: usuario.password,
                clubeId: usuario.clubeId,
                funcao: usuario.funcao,
                ativo: usuario.ativo,
                codigo: usuario.codigo,
            },
            include: { clube: true, presencas: true },
        });
        return this.exclude(user, 'password');
    }
    async remove(id) {
        return await this.prisma.usuario.delete({
            where: { id },
        });
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map