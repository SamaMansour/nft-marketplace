import { AuthService } from '../services/auth.service';
import { RegisterUserInput } from '../../users/dto/register-user.input';
import { LoginInput } from '../dto/login.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInput: LoginInput): Promise<{
        accessToken: string;
    }>;
    register(registerUserInput: RegisterUserInput): Promise<import("../../users/entities/user.entity").UserEntity>;
}
