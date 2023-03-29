import { Asset } from '../../assets/models/asset.model';
import { UserProfileOutput } from '../../users/dto/user-profile.output';
import Coin from '../../users/enums/coin.enum';
export declare class TransactionOutput {
    id: string;
    coin: Coin;
    amount: number;
    createdAt: Date;
    asset: Asset;
    assetId: string;
    buyer: UserProfileOutput;
    seller: UserProfileOutput;
}
