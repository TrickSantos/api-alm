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
exports.ClubeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ClubeService = class ClubeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clube) {
        await this.prisma.clube.create({
            data: {
                nome: clube.nome,
                logo: clube.logo,
                pais: clube.pais,
                regiao: clube.regiao,
                codigo: clube.codigo,
            },
        });
    }
    async findAll() {
        return await this.prisma.clube.findMany({
            include: { membros: true },
        });
    }
    async findOne(id) {
        return await this.prisma.clube.findUnique({
            where: { id },
            include: { membros: true },
        });
    }
    async update(id, clube) {
        return await this.prisma.clube.update({
            where: { id },
            data: {
                nome: clube.nome,
                logo: clube.logo,
                pais: clube.pais,
                regiao: clube.regiao,
                ativo: clube.ativo,
                codigo: clube.codigo,
            },
            include: {
                membros: true,
            },
        });
    }
    async remove(id) {
        await this.prisma.clube.delete({
            where: { id },
        });
    }
};
ClubeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClubeService);
exports.ClubeService = ClubeService;
//# sourceMappingURL=clube.service.js.map