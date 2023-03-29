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
exports.Comment = void 0;
const graphql_1 = require("@nestjs/graphql");
const asset_model_1 = require("../../assets/models/asset.model");
const user_profile_output_1 = require("../../users/dto/user-profile.output");
let Comment = class Comment {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_profile_output_1.UserProfileOutput, { nullable: true }),
    __metadata("design:type", user_profile_output_1.UserProfileOutput)
], Comment.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => asset_model_1.Asset),
    __metadata("design:type", asset_model_1.Asset)
], Comment.prototype, "asset", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "assetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Comment.prototype, "updatedAt", void 0);
Comment = __decorate([
    (0, graphql_1.ObjectType)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map