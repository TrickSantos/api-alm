import { Strategy } from 'passport-jwt';
import { UsuarioService } from 'repositories/usuario/usuario.service';
declare const WsJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class WsJwtStrategy extends WsJwtStrategy_base {
    private readonly userService;
    constructor(userService: UsuarioService);
    validate(payload: any): Promise<Omit<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }, "password">>;
}
export {};
