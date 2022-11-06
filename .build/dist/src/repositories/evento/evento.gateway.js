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
var __param = exports && exports.__param || function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const evento_service_1 = require("./evento.service");
const create_evento_dto_1 = require("./dto/create-evento.dto");
const update_evento_dto_1 = require("./dto/update-evento.dto");
const ws_guard_1 = require("../../auth/guards/ws.guard");
const common_1 = require("@nestjs/common");
const ws_filter_1 = require("../../ws.filter");
const event_emitter_1 = require("@nestjs/event-emitter");
let EventoGateway = class EventoGateway2 {
  constructor(eventoService) {
    this.eventoService = eventoService;
  }
  async create(createEventoDto) {
    await this.eventoService.create(createEventoDto);
    this.server.emit("evento:created");
    return { status: "sucess", message: ["Evento salvo com sucesso!"] };
  }
  findAll() {
    return this.eventoService.findAll();
  }
  findOne(id) {
    return this.eventoService.findOne(id);
  }
  async update(updateEventoDto) {
    await this.eventoService.update(updateEventoDto.id, updateEventoDto);
    this.server.emit("evento:updated");
    return { status: "sucess", message: ["Evento salvo com sucesso!"] };
  }
  async remove(id) {
    await this.eventoService.remove(id);
    this.server.emit("evento:destroyed");
  }
  handle() {
    this.server.emit("evento:updated");
  }
};
__decorate([
  (0, websockets_1.WebSocketServer)(),
  __metadata("design:type", socket_io_1.Server)
], EventoGateway.prototype, "server", void 0);
__decorate([
  (0, websockets_1.SubscribeMessage)("evento:create"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto]),
  __metadata("design:returntype", Promise)
], EventoGateway.prototype, "create", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("evento:index"),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", []),
  __metadata("design:returntype", void 0)
], EventoGateway.prototype, "findAll", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("evento:find"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Number]),
  __metadata("design:returntype", void 0)
], EventoGateway.prototype, "findOne", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("evento:update"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [update_evento_dto_1.UpdateEventoDto]),
  __metadata("design:returntype", Promise)
], EventoGateway.prototype, "update", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("evento:destroy"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Number]),
  __metadata("design:returntype", Promise)
], EventoGateway.prototype, "remove", null);
__decorate([
  (0, event_emitter_1.OnEvent)("evento:update", { async: true }),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", []),
  __metadata("design:returntype", void 0)
], EventoGateway.prototype, "handle", null);
EventoGateway = __decorate([
  (0, websockets_1.WebSocketGateway)({
    cors: "*:*"
  }),
  (0, common_1.UseGuards)(ws_guard_1.WsAuthGuard),
  (0, common_1.UseFilters)(new ws_filter_1.WsExceptionFilter()),
  (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
  __metadata("design:paramtypes", [evento_service_1.EventoService])
], EventoGateway);
exports.EventoGateway = EventoGateway;
//# sourceMappingURL=evento.gateway.js.map
