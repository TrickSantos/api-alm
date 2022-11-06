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
exports.EventoProducerService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const luxon_1 = require("luxon");
let EventoProducerService = class EventoProducerService2 {
  constructor(queue) {
    this.queue = queue;
  }
  async execute(evento) {
    const inicioDelay = luxon_1.DateTime.fromJSDate(evento.inicio).setZone("America/Sao_Paulo").diffNow().milliseconds;
    const fimDelay = luxon_1.DateTime.fromJSDate(evento.fim).setZone("America/Sao_Paulo").diffNow().milliseconds;
    await this.queue.add("inicio", evento, {
      delay: inicioDelay
    });
    await this.queue.add("fim", evento, {
      delay: fimDelay
    });
  }
};
EventoProducerService = __decorate([
  (0, common_1.Injectable)(),
  __param(0, (0, bull_1.InjectQueue)("evento")),
  __metadata("design:paramtypes", [Object])
], EventoProducerService);
exports.EventoProducerService = EventoProducerService;
//# sourceMappingURL=evento.producer.js.map
