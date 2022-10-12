"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencaGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const presenca_service_1 = require("./presenca.service");
const create_presenca_dto_1 = require("./dto/create-presenca.dto");
const ws_guard_1 = require("../../auth/guards/ws.guard");
const common_1 = require("@nestjs/common");
const ws_filter_1 = require("../../ws.filter");
let PresencaGateway = class PresencaGateway {
    constructor(presencaService) {
        this.presencaService = presencaService;
    }
    async create(createPresencaDto) {
        await this.presencaService.create(createPresencaDto);
        this.server.emit('presenca:created');
        return { status: 'sucess', message: ['Presenca salva com sucesso!'] };
    }
    findAll() {
        return this.presencaService.findAll();
    }
    getPresences(id) {
        return this.presencaService.getPresencasByEventId(id);
    }
    findOne(id) {
        return this.presencaService.findOne(id);
    }
    async remove(id) {
        await this.presencaService.remove(id);
        this.server.emit('presenca:destroyed');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PresencaGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('presenca:create'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_presenca_dto_1.CreatePresencaDto]),
    __metadata("design:returntype", Promise)
], PresencaGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('presenca:index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PresencaGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('presenca:getPresences'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PresencaGateway.prototype, "getPresences", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('presenca:find'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PresencaGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('presenca:destroy'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PresencaGateway.prototype, "remove", null);
PresencaGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: '*:*',
    }),
    (0, common_1.UseGuards)(ws_guard_1.WsAuthGuard),
    (0, common_1.UseFilters)(new ws_filter_1.WsExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __metadata("design:paramtypes", [presenca_service_1.PresencaService])
], PresencaGateway);
exports.PresencaGateway = PresencaGateway;
//# sourceMappingURL=presenca.gateway.js.map