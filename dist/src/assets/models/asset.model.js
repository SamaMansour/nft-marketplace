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
exports.Asset = void 0;
const paginated_comments_output_1 = require("./../../comments/dto/paginated-comments.output");
const user_profile_output_1 = require("../../users/dto/user-profile.output");
const graphql_1 = require("@nestjs/graphql");
let Asset = class Asset {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "size", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "royalties", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "lastSale", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Asset.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_profile_output_1.UserProfileOutput, { nullable: true }),
    __metadata("design:type", user_profile_output_1.UserProfileOutput)
], Asset.prototype, "creator", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "creatorId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_profile_output_1.UserProfileOutput),
    __metadata("design:type", user_profile_output_1.UserProfileOutput)
], Asset.prototype, "owner", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Asset.prototype, "ownerId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => paginated_comments_output_1.PaginatedComments, { nullable: true }),
    __metadata("design:type", paginated_comments_output_1.PaginatedComments)
], Asset.prototype, "comments", void 0);
Asset = __decorate([
    (0, graphql_1.ObjectType)()
], Asset);
exports.Asset = Asset;
//# sourceMappingURL=asset.model.js.map