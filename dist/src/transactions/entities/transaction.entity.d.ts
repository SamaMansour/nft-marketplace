import { AssetEntity } from '../../assets/entities/asset.entity';
import { UserEntity } from '../../users/entities/user.entity';
import Coin from '../../users/enums/coin.enum';
export declare class TransactionEntity {
    id: string;
    coin: Coin;
    amount: number;
    asset: AssetEntity;
    assetId: string;
    buyer: UserEntity;
    buyerId: string;
    seller: UserEntity;
    sellerId: string;
    createdAt: Date;
}
