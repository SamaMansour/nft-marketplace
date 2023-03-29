"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class AssetNotFoundException extends common_1.NotFoundException {
    constructor(assetId) {
        super(`Asset with id: ${assetId} not found`);
    }
}
exports.AssetNotFoundException = AssetNotFoundException;
//# sourceMappingURL=asset-not-found.exception.js.map