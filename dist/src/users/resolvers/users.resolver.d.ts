import { UpdateUserInput } from '../dto/update-user.input';
import { UserEntity } from '../entities/user.entity';
import { UsersService } from '../services/users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserProfile(id: string): Promise<UserEntity>;
    updateUser(updateUserInput: UpdateUserInput, user: UserEntity): Promise<UserEntity>;
    deleteUser(userId: string, user: UserEntity): Promise<UserEntity>;
    restoreDeletedUser(userId: string): Promise<UserEntity>;
}
