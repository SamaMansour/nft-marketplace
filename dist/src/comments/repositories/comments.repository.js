"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("../entities/comment.entity");
let CommentsRepository = class CommentsRepository extends typeorm_1.Repository {
    async createComment(createCommentInput, author, asset) {
        const newComment = this.create(Object.assign(Object.assign({}, createCommentInput), { author,
            asset }));
        return await this.save(newComment);
    }
    async updateComment(updateCommentInput) {
        await this.update(updateCommentInput.id, updateCommentInput);
        return await this.findOne(updateCommentInput.id, {
            relations: ['author', 'asset'],
        });
    }
    async getCommentsByAssetIds(assetIds) {
        const comments = await this.find({
            where: {
                asset: {
                    id: (0, typeorm_1.In)(assetIds),
                },
            },
            relations: ['author', 'asset'],
        });
        return comments;
    }
    async getPaginatedCommentsForAsset(assetId, pagination) {
        const { limit, offset, orderBy } = pagination;
        const { field, direction: sortOrder } = orderBy;
        const [comments, count] = await this.findAndCount({
            where: {
                asset: {
                    id: assetId,
                },
            },
            order: {
                [field]: sortOrder,
            },
            skip: offset,
            take: limit,
        });
        return {
            comments,
            paginationInfo: {
                total: count,
                limit,
                offset,
            },
        };
    }
};
CommentsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(comment_entity_1.CommentEntity)
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map