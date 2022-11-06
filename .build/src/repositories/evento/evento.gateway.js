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
  EventoGateway: () => EventoGateway
});
var import_websockets = __toModule(require("@nestjs/websockets"));
var import_ws = __toModule(require("auth/guards/ws.guard"));
var import_common = __toModule(require("@nestjs/common"));
var import_ws2 = __toModule(require("ws.filter"));
var import_event_emitter = __toModule(require("@nestjs/event-emitter"));
let EventoGateway = class {
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
__decorateClass([
  (0, import_websockets.WebSocketServer)()
], EventoGateway.prototype, "server", 2);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("evento:create"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], EventoGateway.prototype, "create", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("evento:index")
], EventoGateway.prototype, "findAll", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("evento:find"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], EventoGateway.prototype, "findOne", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("evento:update"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], EventoGateway.prototype, "update", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("evento:destroy"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], EventoGateway.prototype, "remove", 1);
__decorateClass([
  (0, import_event_emitter.OnEvent)("evento:update", { async: true })
], EventoGateway.prototype, "handle", 1);
EventoGateway = __decorateClass([
  (0, import_websockets.WebSocketGateway)({
    cors: "*:*"
  }),
  (0, import_common.UseGuards)(import_ws.WsAuthGuard),
  (0, import_common.UseFilters)(new import_ws2.WsExceptionFilter()),
  (0, import_common.UsePipes)(new import_common.ValidationPipe({ transform: true }))
], EventoGateway);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventoGateway
});
//# sourceMappingURL=evento.gateway.js.map
