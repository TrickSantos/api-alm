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
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let EventoService = class EventoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(evento) {
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
    async findOne(id) {
        return await this.prisma.evento.findUniqueOrThrow({
            where: { id },
            include: { presentes: true },
        });
    }
    async update(id, evento) {
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
    async remove(id) {
        await this.prisma.evento.delete({
            where: { id },
        });
    }
};
EventoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map