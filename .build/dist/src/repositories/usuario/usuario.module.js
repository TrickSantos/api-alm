"use strict";
var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const usuario_gateway_1 = require("./usuario.gateway");
const prisma_module_1 = require("../../prisma/prisma.module");
let UsuarioModule = class UsuarioModule2 {
};
UsuarioModule = __decorate([
  (0, common_1.Module)({
    imports: [prisma_module_1.PrismaModule],
    providers: [usuario_gateway_1.UsuarioGateway, usuario_service_1.UsuarioService],
    exports: [usuario_service_1.UsuarioService]
  })
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map
