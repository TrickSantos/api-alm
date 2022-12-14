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
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
let PresencaService = class PresencaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(presenca) {
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
    async getPresencasByEventId(id) {
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
        });
        const res = clubes.map((clube) => {
            const porcentagem = Math.floor((clube._count.presentes / clube._count.membros) * 100);
            return {
                id: clube.id,
                logo: clube.logo,
                nome: clube.nome,
                porcentagem,
            };
        });
        const primeiros = res.map(async (clube) => {
            const ultimo = await this.prisma.$queryRaw(client_1.Prisma.sql `select
	c.id, p."usuarioId" , p."createdAt" 
from
	presenca as p
inner join usuario as u on
	p."usuarioId" = u.id
inner join clube as c on
	p."clubeId" = c.id 
where
	p."eventoId" = ${id} and 
	u.funcao in ('desbravador','diretoria') and
	c.id = ${clube.id}
order by
	p."createdAt" desc
limit 1`);
            return Object.assign(Object.assign({}, clube), { ultimo: ultimo[0].createdAt });
        });
        return primeiros;
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
    async verificaPorcentagem(presenca) {
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
        const porcentagem = Math.floor((clube._count.presentes / clube._count.membros) * 100);
        return Object.assign(Object.assign({}, clube), { porcentagem });
    }
};
PresencaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PresencaService);
exports.PresencaService = PresencaService;
//# sourceMappingURL=presenca.service.js.map