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
var __param = exports && exports.__param || function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const usuario_service_1 = require("./usuario.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const index_usuario_dto_1 = require("./dto/index-usuario.dto");
let UsuarioGateway = class UsuarioGateway2 {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }
  async create(createUsuarioDto) {
    await this.usuarioService.create(createUsuarioDto);
    this.server.emit("usuario:created");
    return { status: "sucess", message: ["Membro salvo com sucesso!"] };
  }
  async findAll(data) {
    return await this.usuarioService.findAll(data);
  }
  async findOne(codigo) {
    const res = await this.usuarioService.findById(codigo);
    if (!res) {
      return { status: "error", message: ["Codigo n\xE3o encontrado!"] };
    }
    return res;
  }
  async update(updateUsuarioDto) {
    await this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
    this.server.emit("usuario:updated");
    return { status: "sucess", message: ["Membro salvo com sucesso!"] };
  }
  async remove(id) {
    await this.usuarioService.remove(id);
    this.server.emit("usuario:destroyed");
  }
};
__decorate([
  (0, websockets_1.WebSocketServer)(),
  __metadata("design:type", socket_io_1.Server)
], UsuarioGateway.prototype, "server", void 0);
__decorate([
  (0, websockets_1.SubscribeMessage)("usuario:create"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
  __metadata("design:returntype", Promise)
], UsuarioGateway.prototype, "create", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("usuario:index"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [index_usuario_dto_1.IndexUsuarioDto]),
  __metadata("design:returntype", Promise)
], UsuarioGateway.prototype, "findAll", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("usuario:find"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [String]),
  __metadata("design:returntype", Promise)
], UsuarioGateway.prototype, "findOne", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("usuario:update"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [update_usuario_dto_1.UpdateUsuarioDto]),
  __metadata("design:returntype", Promise)
], UsuarioGateway.prototype, "update", null);
__decorate([
  (0, websockets_1.SubscribeMessage)("usuario:destroy"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [Number]),
  __metadata("design:returntype", Promise)
], UsuarioGateway.prototype, "remove", null);
UsuarioGateway = __decorate([
  (0, websockets_1.WebSocketGateway)({
    cors: "*:*"
  }),
  __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioGateway);
exports.UsuarioGateway = UsuarioGateway;
//# sourceMappingURL=usuario.gateway.js.map
