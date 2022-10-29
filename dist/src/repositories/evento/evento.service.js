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
var EventoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
const event_emitter_1 = require("@nestjs/event-emitter");
const evento_producer_1 = require("./jobs/evento.producer");
let EventoService = EventoService_1 = class EventoService {
    constructor(prisma, eventEmitter, schedulerRegistry, eventoQueue) {
        this.prisma = prisma;
        this.eventEmitter = eventEmitter;
        this.schedulerRegistry = schedulerRegistry;
        this.eventoQueue = eventoQueue;
        this.logger = new common_1.Logger(EventoService_1.name);
    }
    async create(evento) {
        const created = await this.prisma.evento.create({
            data: {
                nome: evento.nome,
                descricao: evento.descricao,
                pontos: evento.pontos,
                inicio: evento.inicio,
                fim: evento.fim,
                ativo: false,
            },
        });
        await this.eventoQueue.execute(created);
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
    addInicioEventoCronJob(name, cronTime, id) {
        const job = new cron_1.CronJob(cronTime, async () => {
            await this.prisma.evento.update({
                where: {
                    id,
                },
                data: {
                    ativo: true,
                },
            });
            this.eventEmitter.emit('evento:update');
            this.logger.log(`Evento com id: ${id} foi marcado como ativo`);
        }, () => this.logger.log(`Evento com id: ${id} foi marcado como ativo`), true, 'America/America/Sao_Paulo');
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        this.logger.log(`Evento inicio adicionado para ${cronTime}`);
    }
    addFimEventoCronJob(name, cronTime, id) {
        const job = new cron_1.CronJob(cronTime, async () => {
            await this.prisma.evento.update({
                where: {
                    id,
                },
                data: {
                    ativo: false,
                },
            });
            this.eventEmitter.emit('evento:update');
            this.logger.log(`Evento com id: ${id} foi marcado como inativo`);
        }, () => this.logger.log(`Evento com id: ${id} foi marcado como inativo`), true, 'America/America/Sao_Paulo');
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        this.logger.log(`Evento fim adicionado para ${cronTime}`);
    }
};
EventoService = EventoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_emitter_1.EventEmitter2,
        schedule_1.SchedulerRegistry,
        evento_producer_1.EventoProducerService])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map