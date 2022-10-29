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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoModule = void 0;
const common_1 = require("@nestjs/common");
const evento_service_1 = require("./evento.service");
const evento_gateway_1 = require("./evento.gateway");
const prisma_module_1 = require("../../prisma/prisma.module");
const bull_1 = require("@nestjs/bull");
const schedule_1 = require("@nestjs/schedule");
const event_emitter_1 = require("@nestjs/event-emitter");
const evento_producer_1 = require("./jobs/evento.producer");
const evento_consumer_1 = require("./jobs/evento.consumer");
const bull_board_1 = require("bull-board");
const bullAdapter_1 = require("bull-board/bullAdapter");
let EventoModule = class EventoModule {
    constructor(queue) {
        this.queue = queue;
    }
    configure(consumer) {
        const { router } = (0, bull_board_1.createBullBoard)([new bullAdapter_1.BullAdapter(this.queue)]);
        consumer.apply(router).forRoutes('/admin/queues');
    }
};
EventoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            bull_1.BullModule.registerQueue({
                name: 'evento',
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [
            evento_gateway_1.EventoGateway,
            evento_service_1.EventoService,
            evento_producer_1.EventoProducerService,
            evento_consumer_1.EventoConsumer,
        ],
    }),
    __param(0, (0, bull_1.InjectQueue)('evento')),
    __metadata("design:paramtypes", [Object])
], EventoModule);
exports.EventoModule = EventoModule;
//# sourceMappingURL=evento.module.js.map