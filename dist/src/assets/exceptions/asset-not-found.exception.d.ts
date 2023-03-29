import { NotFoundException } from '@nestjs/common';
export declare class AssetNotFoundException extends NotFoundException {
    constructor(assetId: string);
}
