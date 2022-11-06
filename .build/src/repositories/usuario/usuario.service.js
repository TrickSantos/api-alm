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
  UsuarioService: () => UsuarioService
});
var import_common = __toModule(require("@nestjs/common"));
var bcrypt = __toModule(require("bcrypt"));
let UsuarioService = class {
  constructor(prisma) {
    this.prisma = prisma;
  }
  exclude(user, ...keys) {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }
  async create(usuario) {
    const password = await bcrypt.hash(usuario.password ?? "senha", 12);
    await this.prisma.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        password,
        clubeId: usuario.clubeId,
        funcao: usuario.funcao,
        ativo: usuario.ativo,
        codigo: usuario.codigo
      }
    });
  }
  async findAll(data) {
    return await this.prisma.usuario.findMany({
      where: data,
      select: {
        id: true,
        codigo: true,
        funcao: true,
        clube: true,
        nome: true,
        clubeId: true,
        email: true,
        presencas: true,
        ativo: false,
        password: false
      }
    });
  }
  async findById(codigo) {
    return await this.prisma.usuario.findFirst({
      where: { codigo },
      include: { clube: true, presencas: true }
    });
  }
  async findOne(email) {
    const user = await this.prisma.usuario.findUniqueOrThrow({
      where: { email },
      include: { clube: true, presencas: true }
    });
    return this.exclude(user, "password");
  }
  async validateUser(email) {
    return await this.prisma.usuario.findUniqueOrThrow({
      where: { email },
      include: { clube: true, presencas: true }
    });
  }
  async update(id, usuario) {
    const user = await this.prisma.usuario.update({
      where: { id },
      data: {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.password,
        clubeId: usuario.clubeId,
        funcao: usuario.funcao,
        ativo: usuario.ativo,
        codigo: usuario.codigo
      },
      include: { clube: true, presencas: true }
    });
    return this.exclude(user, "password");
  }
  async remove(id) {
    return await this.prisma.usuario.delete({
      where: { id }
    });
  }
};
UsuarioService = __decorateClass([
  (0, import_common.Injectable)()
], UsuarioService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsuarioService
});
//# sourceMappingURL=usuario.service.js.map
