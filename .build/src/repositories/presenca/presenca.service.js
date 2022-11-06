var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  PresencaService: () => PresencaService
});
var import_common = __toModule(require("@nestjs/common"));
var import_client2 = __toModule(require("@prisma/client"));
let PresencaService = class {
  constructor(prisma) {
    this.prisma = prisma;
  }
  async create(presenca) {
    await this.prisma.presenca.upsert({
      where: {
        eventoId_usuarioId_clubeId: {
          clubeId: presenca.clubeId,
          eventoId: presenca.eventoId,
          usuarioId: presenca.usuarioId
        }
      },
      create: {
        eventoId: presenca.eventoId,
        clubeId: presenca.clubeId,
        usuarioId: presenca.usuarioId
      },
      update: {
        eventoId: presenca.eventoId,
        clubeId: presenca.clubeId,
        usuarioId: presenca.usuarioId
      }
    });
  }
  async findAll() {
    return await this.prisma.presenca.findMany({
      include: { clube: true, evento: true, usuario: true }
    });
  }
  async getPresencasByEventId(id) {
    const clubes = await this.prisma.clube.findMany({
      select: {
        nome: true,
        logo: true,
        id: true,
        _count: {
          select: {
            presentes: {
              where: {
                eventoId: id,
                usuario: {
                  funcao: {
                    in: ["desbravador", "diretoria"]
                  }
                }
              }
            },
            membros: {
              where: {
                funcao: {
                  in: ["desbravador", "diretoria"]
                }
              }
            }
          }
        }
      }
    });
    const res = clubes.map((clube) => {
      const porcentagem = Math.floor(clube._count.presentes / clube._count.membros * 100);
      return {
        id: clube.id,
        logo: clube.logo,
        nome: clube.nome,
        porcentagem
      };
    });
    const primeiros = res.map(async (clube) => {
      const ultimo = await this.prisma.$queryRaw(import_client2.Prisma.sql`select
	c.id, p."usuarioId" , p."createdAt" 
from
	presenca as p
inner join usuario as u on
	p."usuarioId" = u.id
inner join clube as c on
	p."clubeId" = c.id 
where
	p."eventoId" = ${id} and 
	u.funcao in ('desbravador','diretoria') and
	c.id = ${clube.id}
order by
	p."createdAt" desc
limit 1`);
      return __spreadProps(__spreadValues({}, clube), { ultimo: ultimo[0].createdAt });
    });
    return primeiros;
  }
  async findOne(id) {
    return await this.prisma.presenca.findUniqueOrThrow({
      where: { id },
      include: { clube: true, evento: true, usuario: true }
    });
  }
  async remove(id) {
    await this.prisma.presenca.delete({
      where: { id }
    });
  }
  async verificaPorcentagem(presenca) {
    const clube = await this.prisma.clube.findFirst({
      select: {
        nome: true,
        logo: true,
        id: true,
        _count: {
          select: {
            presentes: {
              where: {
                eventoId: presenca.eventoId,
                usuario: {
                  funcao: {
                    in: ["desbravador", "diretoria"]
                  }
                }
              }
            },
            membros: {
              where: {
                funcao: {
                  in: ["desbravador", "diretoria"]
                }
              }
            }
          }
        }
      },
      where: {
        id: presenca.clubeId
      },
      orderBy: {
        presentes: {
          _count: "desc"
        }
      }
    });
    const porcentagem = Math.floor(clube._count.presentes / clube._count.membros * 100);
    return __spreadProps(__spreadValues({}, clube), { porcentagem });
  }
};
PresencaService = __decorateClass([
  (0, import_common.Injectable)()
], PresencaService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PresencaService
});
//# sourceMappingURL=presenca.service.js.map
