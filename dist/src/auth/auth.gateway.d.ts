import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
export declare class AuthGateway {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginDTO): Promise<{
        token: string;
        usuario: Omit<import(".prisma/client").usuario & {
            clube: import(".prisma/client").clube;
            presencas: import(".prisma/client").presenca[];
        }, "password">;
    }>;
}
