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
exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
var Role;
(function(Role2) {
  Role2[Role2["desbravador"] = 0] = "desbravador";
  Role2[Role2["administrador"] = 1] = "administrador";
  Role2[Role2["diretoria"] = 2] = "diretoria";
  Role2[Role2["apoio"] = 3] = "apoio";
  Role2[Role2["staff"] = 4] = "staff";
})(Role || (Role = {}));
class CreateUsuarioDto {
}
__decorate([
  (0, class_validator_1.IsString)(),
  __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nome", void 0);
__decorate([
  (0, class_validator_1.IsEmail)(),
  (0, class_validator_1.IsOptional)(),
  __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
  (0, class_validator_1.IsString)(),
  (0, class_validator_1.IsOptional)(),
  __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
  (0, class_validator_1.IsString)(),
  (0, class_validator_1.IsOptional)(),
  __metadata("design:type", String)
], CreateUsuarioDto.prototype, "codigo", void 0);
__decorate([
  (0, class_validator_1.IsEnum)(Role),
  __metadata("design:type", String)
], CreateUsuarioDto.prototype, "funcao", void 0);
__decorate([
  (0, class_validator_1.IsInt)(),
  __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "clubeId", void 0);
__decorate([
  (0, class_validator_1.IsBoolean)(),
  (0, class_validator_1.IsOptional)(),
  __metadata("design:type", Boolean)
], CreateUsuarioDto.prototype, "ativo", void 0);
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-usuario.dto.js.map
