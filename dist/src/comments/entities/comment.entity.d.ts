import { AssetEntity } from '../../assets/entities/asset.entity';
import { BaseModel } from '../../common/models/base.model';
import { UserEntity } from '../../users/entities/user.entity';
export declare class CommentEntity extends BaseModel {
    id: string;
    comment: string;
    author: UserEntity;
    authorId: string;
    asset: AssetEntity;
    assetId: string;
}
