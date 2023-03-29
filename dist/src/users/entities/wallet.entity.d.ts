import { BaseModel } from '../../common/models/base.model';
import Coin from '../enums/coin.enum';
import { UserEntity } from './user.entity';
export declare class WalletEntity extends BaseModel {
    id: string;
    balance: number;
    owner: UserEntity;
    ownerId: string;
    coin: Coin;
}
