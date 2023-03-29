import { CreateCommentInput } from '../dto/create-comment.input';
import { UpdateCommentInput } from '../dto/update-comment.input';
import { CommentsRepository } from '../repositories/comments.repository';
import { AssetsService } from '../../assets/services/assets.service';
import { PaginationArgs } from '../../common/pagination-filtering/pagination.args';
import { UserEntity } from '../../users/entities/user.entity';
import { CommentEntity } from '../entities/comment.entity';
import { PaginationInfo } from '../../common/pagination-filtering/pagination-info.output';
export declare class CommentsService {
    private readonly commentRepository;
    private readonly assetsService;
    constructor(commentRepository: CommentsRepository, assetsService: AssetsService);
    createComment(createCommentInput: CreateCommentInput, author: UserEntity): Promise<CommentEntity>;
    getCommentsByAssetIds(assetIds: string[], paginationArgs: PaginationInfo): Promise<{
        [key: string]: CommentEntity[];
    }>;
    getPaginatedCommentsForAsset(assetId: string, pagination: PaginationArgs): Promise<{
        comments: CommentEntity[];
        paginationInfo: {
            total: number;
            limit: number;
            offset: number;
        };
    }>;
    getCommentById(commentId: string): Promise<CommentEntity>;
    updateComment(updateCommentInput: UpdateCommentInput, user: UserEntity): Promise<CommentEntity>;
    deleteComment(id: string, user: UserEntity): Promise<CommentEntity>;
    private verifyUserIsAuthor;
    private paginateComments;
    private groupCommentsByAssetId;
}
