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
  UsuarioGateway: () => UsuarioGateway
});
var import_websockets = __toModule(require("@nestjs/websockets"));
let UsuarioGateway = class {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }
  async create(createUsuarioDto) {
    await this.usuarioService.create(createUsuarioDto);
    this.server.emit("usuario:created");
    return { status: "sucess", message: ["Membro salvo com sucesso!"] };
  }
  async findAll(data) {
    return await this.usuarioService.findAll(data);
  }
  async findOne(codigo) {
    const res = await this.usuarioService.findById(codigo);
    if (!res) {
      return { status: "error", message: ["Codigo n\xE3o encontrado!"] };
    }
    return res;
  }
  async update(updateUsuarioDto) {
    await this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
    this.server.emit("usuario:updated");
    return { status: "sucess", message: ["Membro salvo com sucesso!"] };
  }
  async remove(id) {
    await this.usuarioService.remove(id);
    this.server.emit("usuario:destroyed");
  }
};
__decorateClass([
  (0, import_websockets.WebSocketServer)()
], UsuarioGateway.prototype, "server", 2);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("usuario:create"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], UsuarioGateway.prototype, "create", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("usuario:index"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], UsuarioGateway.prototype, "findAll", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("usuario:find"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], UsuarioGateway.prototype, "findOne", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("usuario:update"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], UsuarioGateway.prototype, "update", 1);
__decorateClass([
  (0, import_websockets.SubscribeMessage)("usuario:destroy"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], UsuarioGateway.prototype, "remove", 1);
UsuarioGateway = __decorateClass([
  (0, import_websockets.WebSocketGateway)({
    cors: "*:*"
  })
], UsuarioGateway);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsuarioGateway
});
//# sourceMappingURL=usuario.gateway.js.map
