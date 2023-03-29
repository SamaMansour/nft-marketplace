import { Comment } from './../models/comment.model';
import { PaginationInfo } from '../../common/pagination-filtering/pagination-info.output';
export declare class PaginatedComments {
    paginationInfo?: PaginationInfo;
    comments?: [Comment];
}
