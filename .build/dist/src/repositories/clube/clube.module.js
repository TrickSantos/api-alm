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
exports.ClubeModule = void 0;
const common_1 = require("@nestjs/common");
const clube_service_1 = require("./clube.service");
const clube_gateway_1 = require("./clube.gateway");
const prisma_module_1 = require("../../prisma/prisma.module");
let ClubeModule = class ClubeModule2 {
};
ClubeModule = __decorate([
  (0, common_1.Module)({
    imports: [prisma_module_1.PrismaModule],
    providers: [clube_gateway_1.ClubeGateway, clube_service_1.ClubeService]
  })
], ClubeModule);
exports.ClubeModule = ClubeModule;
//# sourceMappingURL=clube.module.js.map
