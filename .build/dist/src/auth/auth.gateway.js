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
exports.AuthGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
let AuthGateway = class AuthGateway2 {
  constructor(authService) {
    this.authService = authService;
  }
  async login(login) {
    const res = await this.authService.login(login.email);
    return res;
  }
};
__decorate([
  (0, websockets_1.SubscribeMessage)("login"),
  __param(0, (0, websockets_1.MessageBody)()),
  __metadata("design:type", Function),
  __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
  __metadata("design:returntype", Promise)
], AuthGateway.prototype, "login", null);
AuthGateway = __decorate([
  (0, websockets_1.WebSocketGateway)({
    cors: "*:*"
  }),
  __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthGateway);
exports.AuthGateway = AuthGateway;
//# sourceMappingURL=auth.gateway.js.map
