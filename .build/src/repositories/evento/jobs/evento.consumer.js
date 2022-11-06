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
  EventoConsumer: () => EventoConsumer
});
var import_bull = __toModule(require("@nestjs/bull"));
var import_common = __toModule(require("@nestjs/common"));
let EventoConsumer = class {
  constructor(prisma, eventEmitter) {
    this.prisma = prisma;
    this.eventEmitter = eventEmitter;
    this.logger = new import_common.Logger(EventoConsumer.name);
  }
  async inicio(job) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id
      },
      data: {
        ativo: true
      }
    });
    this.eventEmitter.emit("evento:update");
  }
  async fim(job) {
    await this.prisma.evento.update({
      where: {
        id: job.data.id
      },
      data: {
        ativo: false
      }
    });
    this.eventEmitter.emit("evento:update");
  }
  onActive(job) {
    this.logger.log(`Processing job ${job.id} of type ${job.name} to status ${job.data.ativo ? "ativo" : "inativo"}...`);
  }
  onComplete(job) {
    this.logger.log(`Completed job ${job.id} of type ${job.name} to status ${job.data.ativo ? "ativo" : "inativo"}...`);
  }
};
__decorateClass([
  (0, import_bull.Process)("inicio")
], EventoConsumer.prototype, "inicio", 1);
__decorateClass([
  (0, import_bull.Process)("fim")
], EventoConsumer.prototype, "fim", 1);
__decorateClass([
  (0, import_bull.OnQueueActive)()
], EventoConsumer.prototype, "onActive", 1);
__decorateClass([
  (0, import_bull.OnQueueCompleted)()
], EventoConsumer.prototype, "onComplete", 1);
EventoConsumer = __decorateClass([
  (0, import_bull.Processor)("evento")
], EventoConsumer);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EventoConsumer
});
//# sourceMappingURL=evento.consumer.js.map
