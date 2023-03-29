import { UserEntity } from '../../users/entities/user.entity';
import { CreateCommentInput } from '../dto/create-comment.input';
import { UpdateCommentInput } from '../dto/update-comment.input';
import { CommentsService } from '../services/comments.service';
export declare class CommentsResolver {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentInput: CreateCommentInput, user: UserEntity): Promise<import("../entities/comment.entity").CommentEntity>;
    updateComment(updateCommentInput: UpdateCommentInput, user: UserEntity): Promise<import("../entities/comment.entity").CommentEntity>;
    deleteComment(commentId: string, user: UserEntity): Promise<import("../entities/comment.entity").CommentEntity>;
}
