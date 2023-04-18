import { PaginatedComments } from './../../comments/dto/paginated-comments.output';
import { UserProfileOutput } from '../../users/dto/user-profile.output';
export declare class Asset {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    size: string;
    royalties: string;
    lastSale?: string;
    createdAt: Date;
    category?: string;
    creator?: UserProfileOutput;
    creatorId?: string;
    owner: UserProfileOutput;
    ownerId: string;
    comments?: PaginatedComments;
}
