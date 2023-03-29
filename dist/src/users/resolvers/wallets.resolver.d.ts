import { UserEntity } from '../entities/user.entity';
import { WalletsService } from '../services/wallets.service';
export declare class WalletsResolver {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    viewWallet(user: UserEntity): Promise<import("../entities/wallet.entity").WalletEntity>;
}
