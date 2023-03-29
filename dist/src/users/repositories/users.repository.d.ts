import { Repository } from 'typeorm';
import { RegisterUserInput } from '../dto/register-user.input';
import { UserEntity } from '../entities/user.entity';
export declare class UsersRepository extends Repository<UserEntity> {
    createUser(registrationData: RegisterUserInput): Promise<UserEntity>;
}
