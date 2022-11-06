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
exports.PresencaModule = void 0;
const common_1 = require("@nestjs/common");
const presenca_service_1 = require("./presenca.service");
const presenca_gateway_1 = require("./presenca.gateway");
const prisma_module_1 = require("../../prisma/prisma.module");
let PresencaModule = class PresencaModule2 {
};
PresencaModule = __decorate([
  (0, common_1.Module)({
    imports: [prisma_module_1.PrismaModule],
    providers: [presenca_gateway_1.PresencaGateway, presenca_service_1.PresencaService]
  })
], PresencaModule);
exports.PresencaModule = PresencaModule;
//# sourceMappingURL=presenca.module.js.map
