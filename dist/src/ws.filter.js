"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
let WsExceptionFilter = class WsExceptionFilter extends websockets_1.BaseWsExceptionFilter {
    catch(exception, host) {
        if (exception instanceof common_1.BadRequestException) {
            const callback = host.getArgByIndex(2);
            const response = exception.getResponse();
            if (callback) {
                callback({ status: 'error', message: response.message });
            }
        }
        else {
            super.catch(exception, host);
        }
    }
};
WsExceptionFilter = __decorate([
    (0, common_1.Catch)(websockets_1.WsException, common_1.BadRequestException)
], WsExceptionFilter);
exports.WsExceptionFilter = WsExceptionFilter;
//# sourceMappingURL=ws.filter.js.map