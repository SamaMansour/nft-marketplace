import Coin from '../enums/coin.enum';
import { User } from '../models/user.model';
export declare class WalletOutput {
    id: string;
    address: string;
    balance: number;
    owner: User;
    ownerId: string;
    coin: Coin;
}
