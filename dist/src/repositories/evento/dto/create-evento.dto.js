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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEventoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do evento precisa ser informado!' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A pontuação do evento precisa ser informada!' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0, { message: 'A pontuação precisa ser maior que 0 (zero)' }),
    __metadata("design:type", Number)
], CreateEventoDto.prototype, "pontos", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'A data inicial precisa ser informada' }),
    __metadata("design:type", Date)
], CreateEventoDto.prototype, "inicio", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'A data final precisa ser informada' }),
    __metadata("design:type", Date)
], CreateEventoDto.prototype, "fim", void 0);
exports.CreateEventoDto = CreateEventoDto;
//# sourceMappingURL=create-evento.dto.js.map