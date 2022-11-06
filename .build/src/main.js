var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_common = __toModule(require("@nestjs/common"));
var import_config = __toModule(require("@nestjs/config"));
var import_core = __toModule(require("@nestjs/core"));
var import_ws = __toModule(require("ws.filter"));
var import_app = __toModule(require("./app.module"));
async function bootstrap() {
  const app = await import_core.NestFactory.create(import_app.AppModule);
  const config = app.get(import_config.ConfigService);
  app.useGlobalPipes(new import_common.ValidationPipe());
  app.useGlobalFilters(new import_ws.WsExceptionFilter());
  await app.listen(config.get("PORT")).then(() => console.log(`Running on port: ${config.get("PORT")}`));
}
bootstrap();
//# sourceMappingURL=main.js.map
