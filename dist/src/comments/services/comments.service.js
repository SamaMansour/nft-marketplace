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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_not_found_exception_1 = require("../exceptions/comment-not-found.exception");
const comments_repository_1 = require("../repositories/comments.repository");
const assets_service_1 = require("../../assets/services/assets.service");
const asset_not_found_exception_1 = require("../../assets/exceptions/asset-not-found.exception");
const direction_enums_1 = require("../../common/pagination-filtering/enums/direction.enums");
let CommentsService = class CommentsService {
    constructor(commentRepository, assetsService) {
        this.commentRepository = commentRepository;
        this.assetsService = assetsService;
    }
    async createComment(createCommentInput, author) {
        const asset = await this.assetsService.getAssetAndOwner(createCommentInput.assetId);
        if (!asset)
            throw new asset_not_found_exception_1.AssetNotFoundException(createCommentInput.assetId);
        return await this.commentRepository.createComment(createCommentInput, author, asset);
    }
    async getCommentsByAssetIds(assetIds, paginationArgs) {
        const comments = await this.commentRepository.getCommentsByAssetIds(assetIds);
        const commentsByAssetId = this.groupCommentsByAssetId(comments);
        const paginatedComments = this.paginateComments(commentsByAssetId, paginationArgs);
        return paginatedComments;
    }
    async getPaginatedCommentsForAsset(assetId, pagination) {
        return await this.commentRepository.getPaginatedCommentsForAsset(assetId, pagination);
    }
    async getCommentById(commentId) {
        return await this.commentRepository.findOne(commentId, {
            relations: ['author', 'asset'],
        });
    }
    async updateComment(updateCommentInput, user) {
        const { id } = updateCommentInput;
        const comment = await this.commentRepository.findOne(id);
        if (!comment)
            throw new comment_not_found_exception_1.CommentNotFoundException(id);
        this.verifyUserIsAuthor(comment, user.id);
        return await this.commentRepository.updateComment(updateCommentInput);
    }
    async deleteComment(id, user) {
        const comment = await this.commentRepository.findOne(id);
        if (!comment)
            throw new comment_not_found_exception_1.CommentNotFoundException(id);
        this.verifyUserIsAuthor(comment, user.id);
        await this.commentRepository.delete(id);
        return comment;
    }
    verifyUserIsAuthor(comment, userId) {
        if (comment.authorId !== userId) {
            throw new common_1.UnauthorizedException(`You can't update comment with id: ${comment.id}`);
        }
    }
    paginateComments(groupedComments, paginationArgs) {
        const { limit, offset, orderBy } = paginationArgs;
        const { direction } = orderBy;
        const paginatedCommentsOutput = {};
        const dateSorter = (a, b) => {
            if (direction === direction_enums_1.default.ASC) {
                return a.createdAt.getTime() - b.createdAt.getTime();
            }
            if (direction === direction_enums_1.default.DESC) {
                return b.createdAt.getTime() - a.createdAt.getTime();
            }
        };
        Object.keys(groupedComments).forEach((assetId) => {
            const paginationLimit = groupedComments[assetId].length - offset > limit
                ? limit
                : groupedComments[assetId].length - offset;
            const paginatedComments = groupedComments[assetId]
                .sort(dateSorter)
                .slice(offset, paginationLimit);
            const paginationInfo = {
                total: groupedComments[assetId].length,
                limit,
                offset,
            };
            paginatedCommentsOutput[assetId] = {
                paginationInfo,
                comments: paginatedComments,
            };
        });
        return paginatedCommentsOutput;
    }
    groupCommentsByAssetId(comments) {
        const commentsByAssetId = {};
        comments.forEach((comment) => {
            if (!commentsByAssetId[comment.assetId]) {
                commentsByAssetId[comment.assetId] = [];
            }
            commentsByAssetId[comment.assetId].push(comment);
        });
        return commentsByAssetId;
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository,
        assets_service_1.AssetsService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map