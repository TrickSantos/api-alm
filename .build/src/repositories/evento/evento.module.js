var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
__export(exports, {
  EventoModule: () => EventoModule
});
var import_common = __toModule(require("@nestjs/common"));
var import_evento = __toModule(require("./evento.service"));
var import_evento2 = __toModule(require("./evento.gateway"));
var import_prisma = __toModule(require("@prisma/prisma.module"));
var import_bull = __toModule(require("@nestjs/bull"));
var import_schedule = __toModule(require("@nestjs/schedule"));
var import_event_emitter = __toModule(require("@nestjs/event-emitter"));
var import_evento3 = __toModule(require("./jobs/evento.producer"));
var import_evento4 = __toModule(require("./jobs/evento.consumer"));
var import_bull_board = __toModule(require("bull-board"));
var import_bullAdapter = __toModule(require("bull-board/bullAdapter"));
let EventoModule = class {
  constructor(queue) {
    this.queue = queue;
  }
  configure(consumer) {
    const { router } = (0, import_bull_board.createBullBoard)([new import_bullAdapter.BullAdapter(this.queue)]);
    consumer.apply(router).forRoutes("/admin/queues");
  }
};
EventoModule = __decorateClass([
  (0, import_common.Module)({
    imports: [
      import_prisma.PrismaModule,
      import_bull.BullModule.registerQueue({
        name: "evento"
      }),
      import_event_emitter.EventEmitterModule.forRoot(),
      import_schedule.ScheduleModule.forRoot()
    ],
    providers: [
      import_evento2.EventoGateway,
      import_evento.EventoService,
      import_evento3.EventoProducerService,
      import_evento4.EventoConsumer
    ]
  }),
  __decorateParam(0, (0, import_bull.InjectQueue)("evento"))
], EventoModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventoModule
});
//# sourceMappingURL=evento.module.js.map
