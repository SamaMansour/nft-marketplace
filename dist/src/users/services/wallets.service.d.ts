import { WalletsRepository } from './../repositories/wallets.repository';
import { WalletEntity } from '../entities/wallet.entity';
import { UserEntity } from '../entities/user.entity';
export declare class WalletsService {
    private readonly walletRepository;
    private logger;
    constructor(walletRepository: WalletsRepository);
    createWallet(user: UserEntity): Promise<WalletEntity>;
    getWalletByOwner(owner: UserEntity): Promise<WalletEntity>;
    increaseBalance(wallet: WalletEntity, amount: number): Promise<WalletEntity>;
    decreaseBalance(wallet: WalletEntity, amount: number): Promise<WalletEntity>;
}
