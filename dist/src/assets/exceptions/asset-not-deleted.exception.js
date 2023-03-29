"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetNotDeletedException = void 0;
const common_1 = require("@nestjs/common");
class AssetNotDeletedException extends common_1.ForbiddenException {
    constructor(assetId) {
        super(`Asset with id: ${assetId} not deleted`);
    }
}
exports.AssetNotDeletedException = AssetNotDeletedException;
//# sourceMappingURL=asset-not-deleted.exception.js.map