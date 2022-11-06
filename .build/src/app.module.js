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
  AppModule: () => AppModule
});
var import_bull = __toModule(require("@nestjs/bull"));
var import_common = __toModule(require("@nestjs/common"));
var import_config = __toModule(require("@nestjs/config"));
var import_repository = __toModule(require("repositories/repository.module"));
var import_auth = __toModule(require("./auth/auth.module"));
let AppModule = class {
};
AppModule = __decorateClass([
  (0, import_common.Module)({
    imports: [
      import_config.ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: [".env"]
      }),
      import_bull.BullModule.forRootAsync({
        imports: [import_config.ConfigModule],
        inject: [import_config.ConfigService],
        useFactory: (config) => ({
          redis: {
            host: config.get("BULL_HOST"),
            port: config.get("BULL_PORT"),
            password: config.get("BULL_PASSWORD")
          }
        })
      }),
      import_bull.BullModule.registerQueue({
        name: "evento"
      }),
      import_repository.RepositoryModule,
      import_auth.AuthModule
    ]
  })
], AppModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppModule
});
//# sourceMappingURL=app.module.js.map
