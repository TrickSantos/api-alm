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
exports.ClubeGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const clube_service_1 = require("./clube.service");
const create_clube_dto_1 = require("./dto/create-clube.dto");
const update_clube_dto_1 = require("./dto/update-clube.dto");
let ClubeGateway = class ClubeGateway {
    constructor(clubeService) {
        this.clubeService = clubeService;
    }
    async create(createClubeDto) {
        await this.clubeService.create(createClubeDto);
        this.server.emit('clube:created');
        return { status: 'sucess', message: ['Clube salvo com sucesso!'] };
    }
    async findAll() {
        return this.clubeService.findAll();
    }
    async findOne(id) {
        return this.clubeService.findOne(id);
    }
    async update(updateClubeDto) {
        await this.clubeService.update(updateClubeDto.id, updateClubeDto);
        this.server.emit('clube:updated');
        return { status: 'sucess', message: ['Clube salvo com sucesso!'] };
    }
    async remove(id) {
        this.clubeService.remove(id);
        this.server.emit('clube:destroyed');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ClubeGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('clube:create'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clube_dto_1.CreateClubeDto]),
    __metadata("design:returntype", Promise)
], ClubeGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clube:index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClubeGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clube:find'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClubeGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clube:update'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clube_dto_1.UpdateClubeDto]),
    __metadata("design:returntype", Promise)
], ClubeGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clube:destroy'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClubeGateway.prototype, "remove", null);
ClubeGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: '*' }),
    __metadata("design:paramtypes", [clube_service_1.ClubeService])
], ClubeGateway);
exports.ClubeGateway = ClubeGateway;
//# sourceMappingURL=clube.gateway.js.map