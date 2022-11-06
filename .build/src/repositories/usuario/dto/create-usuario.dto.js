var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
__export(exports, {
  CreateUsuarioDto: () => CreateUsuarioDto
});
var import_class_validator = __toModule(require("class-validator"));
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
__decorateClass([
  (0, import_class_validator.IsString)()
], CreateUsuarioDto.prototype, "nome", 2);
__decorateClass([
  (0, import_class_validator.IsEmail)(),
  (0, import_class_validator.IsOptional)()
], CreateUsuarioDto.prototype, "email", 2);
__decorateClass([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsOptional)()
], CreateUsuarioDto.prototype, "password", 2);
__decorateClass([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsOptional)()
], CreateUsuarioDto.prototype, "codigo", 2);
__decorateClass([
  (0, import_class_validator.IsEnum)(Role)
], CreateUsuarioDto.prototype, "funcao", 2);
__decorateClass([
  (0, import_class_validator.IsInt)()
], CreateUsuarioDto.prototype, "clubeId", 2);
__decorateClass([
  (0, import_class_validator.IsBoolean)(),
  (0, import_class_validator.IsOptional)()
], CreateUsuarioDto.prototype, "ativo", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateUsuarioDto
});
//# sourceMappingURL=create-usuario.dto.js.map
