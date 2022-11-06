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
__export(exports, {
  AuthService: () => AuthService
});
var import_common = __toModule(require("@nestjs/common"));
var import_websockets = __toModule(require("@nestjs/websockets"));
var bcrypt = __toModule(require("bcrypt"));
let AuthService = class {
  constructor(usuarioService, jwtService) {
    this.usuarioService = usuarioService;
    this.jwtService = jwtService;
  }
  async validate(email, pass) {
    const user = await this.usuarioService.validateUser(email);
    if (!user)
      throw new import_websockets.WsException("Usuario n\xE3o encontrado");
    const passValid = await bcrypt.compare(pass, user.password);
    if (passValid) {
      return user;
    } else {
      throw new import_websockets.WsException("Email ou Senha invalidos");
    }
  }
  async login(email) {
    console.log("login");
    const usuario = await this.usuarioService.findOne(email);
    return {
      token: this.jwtService.sign(usuario),
      usuario
    };
  }
};
AuthService = __decorateClass([
  (0, import_common.Injectable)()
], AuthService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthService
});
//# sourceMappingURL=auth.service.js.map
