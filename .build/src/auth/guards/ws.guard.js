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
__export(exports, {
  WsAuthGuard: () => WsAuthGuard
});
var import_websockets = __toModule(require("@nestjs/websockets"));
var import_configuration = __toModule(require("config/configuration"));
var jwt = __toModule(require("jsonwebtoken"));
class WsAuthGuard {
  async canActivate(context) {
    try {
      const client = context.switchToWs().getClient().handshake;
      const payload = this.verifyToken(client.auth.token);
      return Boolean(payload);
    } catch (error) {
      throw new import_websockets.WsException(error.message);
    }
  }
  verifyToken(token) {
    try {
      return jwt.verify(token, (0, import_configuration.default)().jwtConstants.secret);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WsAuthGuard
});
//# sourceMappingURL=ws.guard.js.map
