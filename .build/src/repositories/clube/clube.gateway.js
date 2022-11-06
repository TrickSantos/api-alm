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
  ClubeGateway: () => ClubeGateway
});
var import_websockets = __toModule(require("@nestjs/websockets"));
let ClubeGateway = class {
  constructor(clubeService) {
    this.clubeService = clubeService;
  }
  async create(createClubeDto) {
    await this.clubeService.create(createClubeDto);
    this.server.emit("clube:created");
    return { status: "sucess", message: ["Clube salvo com sucesso!"] };
  }
  async findAll() {
    return this.clubeService.findAll();
  }
  async findOne(id) {
    return this.clubeService.findOne(id);
  }
  async update(updateClubeDto) {
    await this.clubeService.update(updateClubeDto.id, updateClubeDto);
    this.server.emit("clube:updated");
    return { status: "sucess", message: ["Clube salvo com sucesso!"] };
  }
  async remove(id) {
    this.clubeService.remove(id);
    this.server.emit("clube:destroyed");
  }
};
__decorateClass([
  (0, import_websockets.WebSocketServer)()
], ClubeGateway.prototype, "server", 2);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("clube:create"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], ClubeGateway.prototype, "create", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("clube:index")
], ClubeGateway.prototype, "findAll", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("clube:find"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], ClubeGateway.prototype, "findOne", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("clube:update"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], ClubeGateway.prototype, "update", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("clube:destroy"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], ClubeGateway.prototype, "remove", 1);
ClubeGateway = __decorateClass([
  (0, import_websockets.WebSocketGateway)({
    cors: "*:*"
  })
], ClubeGateway);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClubeGateway
});
//# sourceMappingURL=clube.gateway.js.map
