"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyOwnAssetForbiddenException = void 0;
const common_1 = require("@nestjs/common");
class BuyOwnAssetForbiddenException extends common_1.ForbiddenException {
    constructor(assetId) {
        super(`You cannot buy your own asset: ${assetId}`);
    }
}
exports.BuyOwnAssetForbiddenException = BuyOwnAssetForbiddenException;
//# sourceMappingURL=buy-asset-forbidden.exception.js.map