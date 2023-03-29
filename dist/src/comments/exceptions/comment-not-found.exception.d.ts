import { NotFoundException } from '@nestjs/common';
export declare class CommentNotFoundException extends NotFoundException {
    constructor(commentId: string);
}
