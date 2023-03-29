import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { WalletEntity } from '../entities/wallet.entity';
export declare class WalletsRepository extends Repository<WalletEntity> {
    createWallet(owner: UserEntity): Promise<WalletEntity>;
}
