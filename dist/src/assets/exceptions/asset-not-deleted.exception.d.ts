import { ForbiddenException } from '@nestjs/common';
export declare class AssetNotDeletedException extends ForbiddenException {
    constructor(assetId: string);
}
