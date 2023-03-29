import { AssetEntity } from '../../assets/entities/asset.entity';
import Role from '../../auth/enums/role.enum';
import { BaseModel } from '../../common/models/base.model';
import Gender from '../enums/gender.enum';
import { WalletEntity } from './wallet.entity';
export declare class UserEntity extends BaseModel {
    id: string;
    username: string;
    email: string;
    password: string;
    aboutMe: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: Gender;
    assets?: AssetEntity[];
    wallet?: WalletEntity;
    walletId?: string;
    role: Role;
}
