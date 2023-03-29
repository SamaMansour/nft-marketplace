import { ForbiddenException } from '@nestjs/common';
export declare class UserNotDeletedException extends ForbiddenException {
    constructor(userId: string);
}
