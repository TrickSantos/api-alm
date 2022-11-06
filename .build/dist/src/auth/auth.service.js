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
var __metadata = exports && exports.__metadata || function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const websockets_1 = require("@nestjs/websockets");
const bcrypt = require("bcrypt");
const usuario_service_1 = require("../repositories/usuario/usuario.service");
let AuthService = class AuthService2 {
  constructor(usuarioService, jwtService) {
    this.usuarioService = usuarioService;
    this.jwtService = jwtService;
  }
  async validate(email, pass) {
    const user = await this.usuarioService.validateUser(email);
    if (!user)
      throw new websockets_1.WsException("Usuario n\xE3o encontrado");
    const passValid = await bcrypt.compare(pass, user.password);
    if (passValid) {
      return user;
    } else {
      throw new websockets_1.WsException("Email ou Senha invalidos");
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
AuthService = __decorate([
  (0, common_1.Injectable)(),
  __metadata("design:paramtypes", [
    usuario_service_1.UsuarioService,
    jwt_1.JwtService
  ])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
