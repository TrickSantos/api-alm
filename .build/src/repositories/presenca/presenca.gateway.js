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
  PresencaGateway: () => PresencaGateway
});
var import_websockets = __toModule(require("@nestjs/websockets"));
var import_ws = __toModule(require("auth/guards/ws.guard"));
var import_common = __toModule(require("@nestjs/common"));
var import_ws2 = __toModule(require("ws.filter"));
let PresencaGateway = class {
  constructor(presencaService) {
    this.presencaService = presencaService;
  }
  async create(createPresencaDto) {
    let clube = await this.presencaService.verificaPorcentagem(createPresencaDto);
    if (clube.porcentagem === 100) {
      return { status: "sucess", message: ["Presenca salva com sucesso!"] };
    }
    await this.presencaService.create(createPresencaDto);
    this.server.emit("presenca:created");
    clube = await this.presencaService.verificaPorcentagem(createPresencaDto);
    if (clube.porcentagem === 100) {
      this.server.emit("ganhador", clube);
      return { status: "sucess", message: ["Presenca salva com sucesso!"] };
    }
  }
  findAll() {
    return this.presencaService.findAll();
  }
  getPresences(id) {
    return this.presencaService.getPresencasByEventId(id);
  }
  findOne(id) {
    return this.presencaService.findOne(id);
  }
  async remove(id) {
    await this.presencaService.remove(id);
    this.server.emit("presenca:destroyed");
  }
  ganhador(presenca) {
    this.server.emit("ganhador", presenca);
  }
};
__decorateClass([
  (0, import_websockets.WebSocketServer)()
], PresencaGateway.prototype, "server", 2);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("presenca:create"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], PresencaGateway.prototype, "create", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("presenca:index")
], PresencaGateway.prototype, "findAll", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("presenca:getPresences"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], PresencaGateway.prototype, "getPresences", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("presenca:find"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], PresencaGateway.prototype, "findOne", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("presenca:destroy"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], PresencaGateway.prototype, "remove", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("ganhador"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], PresencaGateway.prototype, "ganhador", 1);
PresencaGateway = __decorateClass([
  (0, import_websockets.WebSocketGateway)({
    cors: "*:*"
  }),
  (0, import_common.UseGuards)(import_ws.WsAuthGuard),
  (0, import_common.UseFilters)(new import_ws2.WsExceptionFilter()),
  (0, import_common.UsePipes)(new import_common.ValidationPipe({ transform: true }))
], PresencaGateway);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PresencaGateway
});
//# sourceMappingURL=presenca.gateway.js.map
