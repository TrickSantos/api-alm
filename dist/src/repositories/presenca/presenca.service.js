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
exports.PresencaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PresencaService = class PresencaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(presenca) {
        await this.prisma.presenca.create({
            data: {
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
    async getPresencasByEventId(id) {
        const clubes = await this.prisma.clube.findMany({
            select: {
                nome: true,
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
    async findOne(id) {
        return await this.prisma.presenca.findUniqueOrThrow({
            where: { id },
            include: { clube: true, evento: true, usuario: true },
        });
    }
    async remove(id) {
        await this.prisma.presenca.delete({
            where: { id },
        });
    }
};
PresencaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PresencaService);
exports.PresencaService = PresencaService;
//# sourceMappingURL=presenca.service.js.map