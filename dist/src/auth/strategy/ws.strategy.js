"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsJwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const websockets_1 = require("@nestjs/websockets");
const configuration_1 = require("../../config/configuration");
const passport_jwt_1 = require("passport-jwt");
class WsJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'wsjwt') {
    constructor(userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromUrlQueryParameter('bearerToken'),
            secretOrKey: (0, configuration_1.default)().jwtConstants.secret,
        });
        this.userService = userService;
    }
    async validate(payload) {
        console.log('validate');
        try {
            return this.userService.findOne(payload.email);
        }
        catch (error) {
            throw new websockets_1.WsException('Não encontrado');
        }
    }
}
exports.WsJwtStrategy = WsJwtStrategy;
//# sourceMappingURL=ws.strategy.js.map