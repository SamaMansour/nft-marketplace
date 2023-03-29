import { Asset } from '../../assets/models/asset.model';
import { UserProfileOutput } from '../../users/dto/user-profile.output';
export declare class Comment {
    id: string;
    comment: string;
    author?: UserProfileOutput;
    authorId?: string;
    asset: Asset;
    assetId: string;
    createdAt: Date;
    updatedAt: Date;
}
