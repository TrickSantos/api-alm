"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAuthGuard = void 0;
const websockets_1 = require("@nestjs/websockets");
const configuration_1 = require("../../config/configuration");
const jwt = require("jsonwebtoken");
class WsAuthGuard {
    async canActivate(context) {
        try {
            const client = context.switchToWs().getClient().handshake;
            const payload = this.verifyToken(client.auth.token);
            return Boolean(payload);
        }
        catch (error) {
            throw new websockets_1.WsException(error.message);
        }
    }
    verifyToken(token) {
        try {
            return jwt.verify(token, (0, configuration_1.default)().jwtConstants.secret);
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.WsAuthGuard = WsAuthGuard;
//# sourceMappingURL=ws.guard.js.map