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
exports.AssetResolver = void 0;
const paginated_assets_model_1 = require("../models/paginated-assets.model");
const pagination_args_1 = require("../../common/pagination-filtering/pagination.args");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const comments_service_1 = require("../../comments/services/comments.service");
const assets_service_1 = require("../services/assets.service");
const create_asset_input_1 = require("../dto/create-asset.input");
const asset_model_1 = require("../models/asset.model");
const role_enum_1 = require("../../auth/enums/role.enum");
const get_current_user_decorator_1 = require("../../auth/decorators/get-current-user.decorator");
const graphql_jwt_auth_guard_1 = require("../../auth/guards/graphql-jwt-auth.guard");
const role_guards_1 = require("../../auth/guards/role.guards");
const asset_search_args_1 = require("../../common/pagination-filtering/asset-search.args");
const user_entity_1 = require("../../users/entities/user.entity");
const comments_loader_1 = require("../../comments/loaders/comments.loader");
let AssetResolver = class AssetResolver {
    constructor(assetsService, commentsService, commentsLoader) {
        this.assetsService = assetsService;
        this.commentsService = commentsService;
        this.commentsLoader = commentsLoader;
    }
    createAsset(createAssetInput, user) {
        return this.assetsService.createAsset(createAssetInput, user);
    }
    async getAllAssets(args) {
        return await this.assetsService.getAssets(args);
    }
    async getAssetById(assetId) {
        return await this.assetsService.getAssetAndOwner(assetId);
    }
    async comments(asset, args) {
        return await this.commentsLoader
            .getPaginatedCommentsForAsset(args)
            .load(asset.id);
    }
    async deleteAsset(assetId, user) {
        return await this.assetsService.removeAsset(assetId, user);
    }
    async restoreDeletedAsset(id) {
        return await this.assetsService.restoreDeletedAsset(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => asset_model_1.Asset),
    __param(0, (0, graphql_1.Args)('createAssetInput')),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asset_input_1.CreateAssetInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], AssetResolver.prototype, "createAsset", null);
__decorate([
    (0, graphql_1.Query)(() => paginated_assets_model_1.PaginatedAssets),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asset_search_args_1.AssetSearchArgs]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "getAllAssets", null);
__decorate([
    (0, graphql_1.Query)(() => asset_model_1.Asset),
    __param(0, (0, graphql_1.Args)('assetId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "getAssetById", null);
__decorate([
    (0, graphql_1.ResolveField)('comments'),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asset_model_1.Asset, pagination_args_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "comments", null);
__decorate([
    (0, graphql_1.Mutation)(() => asset_model_1.Asset),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "deleteAsset", null);
__decorate([
    (0, common_1.UseGuards)((0, role_guards_1.default)(role_enum_1.default.Admin)),
    (0, graphql_1.Mutation)(() => asset_model_1.Asset),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "restoreDeletedAsset", null);
AssetResolver = __decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)((of) => asset_model_1.Asset),
    __metadata("design:paramtypes", [assets_service_1.AssetsService,
        comments_service_1.CommentsService,
        comments_loader_1.CommentsLoader])
], AssetResolver);
exports.AssetResolver = AssetResolver;
//# sourceMappingURL=assets.resolver.js.map