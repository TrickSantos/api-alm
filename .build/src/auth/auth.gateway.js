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
  AuthGateway: () => AuthGateway
});
var import_websockets = __toModule(require("@nestjs/websockets"));
let AuthGateway = class {
  constructor(authService) {
    this.authService = authService;
  }
  async login(login) {
    const res = await this.authService.login(login.email);
    return res;
  }
};
__decorateClass([
  (0, import_websockets.SubscribeMessage)("login"),
  __decorateParam(0, (0, import_websockets.MessageBody)())
], AuthGateway.prototype, "login", 1);
AuthGateway = __decorateClass([
  (0, import_websockets.WebSocketGateway)({
    cors: "*:*"
  })
], AuthGateway);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthGateway
});
//# sourceMappingURL=auth.gateway.js.map
