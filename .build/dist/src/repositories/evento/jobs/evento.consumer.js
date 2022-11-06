"use strict";
var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = exports && exports.__metadata || function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var EventoConsumer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const prisma_service_1 = require("../../../prisma/prisma.service");
let EventoConsumer = EventoConsumer_1 = class EventoConsumer2 {
  constructor(prisma, eventEmitter) {
    this.prisma = prisma;
    this.eventEmitter = eventEmitter;
    this.logger = new common_1.Logger(EventoConsumer_1.name);
  }
  async inicio(job) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id
      },
      data: {
        ativo: true
      }
    });
    this.eventEmitter.emit("evento:update");
  }
  async fim(job) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id
      },
      data: {
        ativo: false
      }
    });
    this.eventEmitter.emit("evento:update");
  }
  onActive(job) {
    this.logger.log(`Processing job ${job.id} of type ${job.name} to status ${job.data.ativo ? "ativo" : "inativo"}...`);
  }
  onComplete(job) {
    this.logger.log(`Completed job ${job.id} of type ${job.name} to status ${job.data.ativo ? "ativo" : "inativo"}...`);
  }
};
__decorate([
  (0, bull_1.Process)("inicio"),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Object]),
  __metadata("design:returntype", Promise)
], EventoConsumer.prototype, "inicio", null);
__decorate([
  (0, bull_1.Process)("fim"),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Object]),
  __metadata("design:returntype", Promise)
], EventoConsumer.prototype, "fim", null);
__decorate([
  (0, bull_1.OnQueueActive)(),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Object]),
  __metadata("design:returntype", void 0)
], EventoConsumer.prototype, "onActive", null);
__decorate([
  (0, bull_1.OnQueueCompleted)(),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Object]),
  __metadata("design:returntype", void 0)
], EventoConsumer.prototype, "onComplete", null);
EventoConsumer = EventoConsumer_1 = __decorate([
  (0, bull_1.Processor)("evento"),
  __metadata("design:paramtypes", [
    prisma_service_1.PrismaService,
    event_emitter_1.EventEmitter2
  ])
], EventoConsumer);
exports.EventoConsumer = EventoConsumer;
//# sourceMappingURL=evento.consumer.js.map
