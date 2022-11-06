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
var import_testing = __toModule(require("@nestjs/testing"));
var import_usuario = __toModule(require("./usuario.gateway"));
var import_usuario2 = __toModule(require("./usuario.service"));
describe("UsuarioGateway", () => {
  let gateway;
  beforeEach(async () => {
    const module2 = await import_testing.Test.createTestingModule({
      providers: [import_usuario.UsuarioGateway, import_usuario2.UsuarioService]
    }).compile();
    gateway = module2.get(import_usuario.UsuarioGateway);
  });
  it("should be defined", () => {
    expect(gateway).toBeDefined();
  });
});
//# sourceMappingURL=usuario.gateway.spec.js.map
