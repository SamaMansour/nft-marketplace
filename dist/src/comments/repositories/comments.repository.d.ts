import { UpdateCommentInput } from './../dto/update-comment.input';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { CreateCommentInput } from '../dto/create-comment.input';
import { CommentEntity } from '../entities/comment.entity';
import { PaginationArgs } from '../../common/pagination-filtering/pagination.args';
export declare class CommentsRepository extends Repository<CommentEntity> {
    createComment(createCommentInput: CreateCommentInput, author: UserEntity, asset: AssetEntity): Promise<CommentEntity>;
    updateComment(updateCommentInput: UpdateCommentInput): Promise<CommentEntity>;
    getCommentsByAssetIds(assetIds: string[]): Promise<CommentEntity[]>;
    getPaginatedCommentsForAsset(assetId: string, pagination: PaginationArgs): Promise<{
        comments: CommentEntity[];
        paginationInfo: {
            total: number;
            limit: number;
            offset: number;
        };
    }>;
}
