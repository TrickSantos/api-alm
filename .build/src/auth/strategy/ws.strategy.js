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
  WsJwtStrategy: () => WsJwtStrategy
});
var import_passport = __toModule(require("@nestjs/passport"));
var import_websockets = __toModule(require("@nestjs/websockets"));
var import_configuration = __toModule(require("config/configuration"));
var import_passport_jwt = __toModule(require("passport-jwt"));
class WsJwtStrategy extends (0, import_passport.PassportStrategy)(import_passport_jwt.Strategy, "wsjwt") {
  constructor(userService) {
    super({
      jwtFromRequest: import_passport_jwt.ExtractJwt.fromUrlQueryParameter("bearerToken"),
      secretOrKey: (0, import_configuration.default)().jwtConstants.secret
    });
    this.userService = userService;
  }
  async validate(payload) {
    console.log("validate");
    try {
      return this.userService.findOne(payload.email);
    } catch (error) {
      throw new import_websockets.WsException("N\xE3o encontrado");
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WsJwtStrategy
});
//# sourceMappingURL=ws.strategy.js.map
