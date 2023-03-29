import { PaginationInfo } from './../../common/pagination-filtering/pagination-info.output';
import * as DataLoader from 'dataloader';
import { CommentsService } from './../services/comments.service';
export declare class CommentsLoader {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    paginationArgs: PaginationInfo;
    getPaginatedCommentsByAssetIdsLoader: DataLoader<string, import("../entities/comment.entity").CommentEntity[], string>;
    getPaginatedCommentsForAsset(paginationArgs: any): DataLoader<string, import("../entities/comment.entity").CommentEntity[], string>;
}
