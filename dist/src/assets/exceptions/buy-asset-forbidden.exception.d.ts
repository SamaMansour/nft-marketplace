import { ForbiddenException } from '@nestjs/common';
export declare class BuyOwnAssetForbiddenException extends ForbiddenException {
    constructor(assetId: string);
}
