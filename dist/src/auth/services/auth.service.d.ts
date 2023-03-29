import { LoginInput } from '../dto/login.input';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput } from '../../users/dto/register-user.input';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/services/users.service';
export declare class AuthService {
    private readonly configService;
    private readonly usersService;
    private readonly jwtService;
    constructor(configService: ConfigService, usersService: UsersService, jwtService: JwtService);
    register(registrationData: RegisterUserInput): Promise<import("../../users/entities/user.entity").UserEntity>;
    login(loginInput: LoginInput): Promise<{
        accessToken: string;
    }>;
    private verifyPassword;
}
