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
  EventoService: () => EventoService
});
var import_common = __toModule(require("@nestjs/common"));
var import_cron = __toModule(require("cron"));
let EventoService = class {
  constructor(prisma, eventEmitter, schedulerRegistry, eventoQueue) {
    this.prisma = prisma;
    this.eventEmitter = eventEmitter;
    this.schedulerRegistry = schedulerRegistry;
    this.eventoQueue = eventoQueue;
    this.logger = new import_common.Logger(EventoService.name);
  }
  async create(evento) {
    const created = await this.prisma.evento.create({
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim,
        ativo: false
      }
    });
    await this.eventoQueue.execute(created);
  }
  async findAll() {
    return await this.prisma.evento.findMany({
      include: { presentes: true }
    });
  }
  async findOne(id) {
    return await this.prisma.evento.findUniqueOrThrow({
      where: { id },
      include: { presentes: true }
    });
  }
  async update(id, evento) {
    return await this.prisma.evento.update({
      where: { id },
      data: {
        nome: evento.nome,
        descricao: evento.descricao,
        pontos: evento.pontos,
        inicio: evento.inicio,
        fim: evento.fim
      }
    });
  }
  async remove(id) {
    await this.prisma.evento.delete({
      where: { id }
    });
  }
  addInicioEventoCronJob(name, cronTime, id) {
    const job = new import_cron.CronJob(cronTime, async () => {
      await this.prisma.evento.update({
        where: {
          id
        },
        data: {
          ativo: true
        }
      });
      this.eventEmitter.emit("evento:update");
      this.logger.log(`Evento com id: ${id} foi marcado como ativo`);
    }, () => this.logger.log(`Evento com id: ${id} foi marcado como ativo`), true, "America/America/Sao_Paulo");
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Evento inicio adicionado para ${cronTime}`);
  }
  addFimEventoCronJob(name, cronTime, id) {
    const job = new import_cron.CronJob(cronTime, async () => {
      await this.prisma.evento.update({
        where: {
          id
        },
        data: {
          ativo: false
        }
      });
      this.eventEmitter.emit("evento:update");
      this.logger.log(`Evento com id: ${id} foi marcado como inativo`);
    }, () => this.logger.log(`Evento com id: ${id} foi marcado como inativo`), true, "America/America/Sao_Paulo");
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Evento fim adicionado para ${cronTime}`);
  }
};
EventoService = __decorateClass([
  (0, import_common.Injectable)()
], EventoService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventoService
});
//# sourceMappingURL=evento.service.js.map
