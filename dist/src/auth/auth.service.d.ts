import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'repositories/usuario/usuario.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validate(email: string, pass: string): Promise<import(".prisma/client").usuario & {
        presencas: import(".prisma/client").presenca[];
        clube: import(".prisma/client").clube;
    }>;
    login(email: string): Promise<{
        token: string;
        usuario: Omit<import(".prisma/client").usuario & {
            presencas: import(".prisma/client").presenca[];
            clube: import(".prisma/client").clube;
        }, "password">;
    }>;
}
