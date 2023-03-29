import { AssetsRepository } from './../../assets/repositories/assets.repository';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';
import { WalletsService } from './wallets.service';
import { RegisterUserInput } from '../dto/register-user.input';
export declare class UsersService {
    private readonly userRepository;
    private readonly assetsRepository;
    private readonly walletsService;
    private readonly logger;
    constructor(userRepository: UsersRepository, assetsRepository: AssetsRepository, walletsService: WalletsService);
    createUserWithWallet(registrationData: RegisterUserInput): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
    updateUser(updateUserInput: UpdateUserInput, user: UserEntity): Promise<UserEntity>;
    deleteUser(userId: string, user: UserEntity): Promise<UserEntity>;
    restoreDeletedUser(userId: string): Promise<UserEntity>;
    getUserByUsername(username: string): Promise<UserEntity>;
}
