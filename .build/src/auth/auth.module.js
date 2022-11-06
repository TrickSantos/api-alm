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
  AuthModule: () => AuthModule
});
var import_common = __toModule(require("@nestjs/common"));
var import_config = __toModule(require("@nestjs/config"));
var import_jwt = __toModule(require("@nestjs/jwt"));
var import_passport = __toModule(require("@nestjs/passport"));
var import_usuario = __toModule(require("repositories/usuario/usuario.module"));
var import_auth = __toModule(require("./auth.gateway"));
var import_auth2 = __toModule(require("./auth.service"));
var import_ws = __toModule(require("./guards/ws.guard"));
var import_local = __toModule(require("./strategy/local.strategy"));
var import_ws2 = __toModule(require("./strategy/ws.strategy"));
let AuthModule = class {
};
AuthModule = __decorateClass([
  (0, import_common.Module)({
    imports: [
      import_usuario.UsuarioModule,
      import_passport.PassportModule,
      import_jwt.JwtModule.registerAsync({
        imports: [import_config.ConfigModule],
        inject: [import_config.ConfigService],
        useFactory: (config) => ({
          secret: "camporiALM2022",
          signOptions: { expiresIn: "3d" }
        })
      })
    ],
    providers: [
      import_auth2.AuthService,
      import_local.LocalStrategy,
      import_auth.AuthGateway,
      import_ws2.WsJwtStrategy,
      import_ws.WsAuthGuard
    ],
    exports: [import_auth2.AuthService, import_ws.WsAuthGuard]
  })
], AuthModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthModule
});
//# sourceMappingURL=auth.module.js.map
