import { CommentEntity } from '../../comments/entities/comment.entity';
import { BaseModel } from '../../common/models/base.model';
import { UserEntity } from '../../users/entities/user.entity';
export declare class AssetEntity extends BaseModel {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    lastSale: Date;
    category: string;
    owner: UserEntity;
    creator: UserEntity;
    creatorId: string;
    ownerId: string;
    comments?: CommentEntity[];
}
