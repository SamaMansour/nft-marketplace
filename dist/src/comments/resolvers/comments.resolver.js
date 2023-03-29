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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const get_current_user_decorator_1 = require("../../auth/decorators/get-current-user.decorator");
const graphql_jwt_auth_guard_1 = require("../../auth/guards/graphql-jwt-auth.guard");
const user_entity_1 = require("../../users/entities/user.entity");
const create_comment_input_1 = require("../dto/create-comment.input");
const update_comment_input_1 = require("../dto/update-comment.input");
const comment_model_1 = require("../models/comment.model");
const comments_service_1 = require("../services/comments.service");
let CommentsResolver = class CommentsResolver {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    createComment(createCommentInput, user) {
        return this.commentsService.createComment(createCommentInput, user);
    }
    async updateComment(updateCommentInput, user) {
        return await this.commentsService.updateComment(updateCommentInput, user);
    }
    async deleteComment(commentId, user) {
        return await this.commentsService.deleteComment(commentId, user);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => comment_model_1.Comment),
    __param(0, (0, graphql_1.Args)('createCommentInput')),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_input_1.CreateCommentInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "createComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_model_1.Comment),
    __param(0, (0, graphql_1.Args)('updateCommentInput')),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_comment_input_1.UpdateCommentInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], CommentsResolver.prototype, "updateComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_model_1.Comment),
    __param(0, (0, graphql_1.Args)('commentId', { type: () => String })),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], CommentsResolver.prototype, "deleteComment", null);
CommentsResolver = __decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => comment_model_1.Comment),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsResolver);
exports.CommentsResolver = CommentsResolver;
//# sourceMappingURL=comments.resolver.js.map