"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const clube_module_1 = require("./clube/clube.module");
const evento_module_1 = require("./evento/evento.module");
const presenca_module_1 = require("./presenca/presenca.module");
const usuario_module_1 = require("./usuario/usuario.module");
let RepositoryModule = class RepositoryModule {
};
RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [clube_module_1.ClubeModule, usuario_module_1.UsuarioModule, evento_module_1.EventoModule, presenca_module_1.PresencaModule],
        exports: [clube_module_1.ClubeModule, usuario_module_1.UsuarioModule, evento_module_1.EventoModule, presenca_module_1.PresencaModule],
    })
], RepositoryModule);
exports.RepositoryModule = RepositoryModule;
//# sourceMappingURL=repository.module.js.map