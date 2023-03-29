import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../../users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: JwtPayload): Promise<UserEntity>;
}
export {};
