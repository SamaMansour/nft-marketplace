"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsLoader = void 0;
const DataLoader = require("dataloader");
const comments_service_1 = require("./../services/comments.service");
const common_1 = require("@nestjs/common");
let CommentsLoader = class CommentsLoader {
    constructor(commentsService) {
        this.commentsService = commentsService;
        this.getPaginatedCommentsByAssetIdsLoader = new DataLoader(async (assetIds) => {
            const paginatedComments = await this.commentsService.getCommentsByAssetIds(assetIds, this.paginationArgs);
            return assetIds.map((assetId) => { var _a; return (_a = paginatedComments[assetId]) !== null && _a !== void 0 ? _a : []; });
        });
    }
    getPaginatedCommentsForAsset(paginationArgs) {
        this.paginationArgs = paginationArgs;
        return this.getPaginatedCommentsByAssetIdsLoader;
    }
};
CommentsLoader = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsLoader);
exports.CommentsLoader = CommentsLoader;
//# sourceMappingURL=comments.loader.js.map