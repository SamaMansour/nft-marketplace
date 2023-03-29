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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("../../assets/entities/asset.entity");
const base_model_1 = require("../../common/models/base.model");
const user_entity_1 = require("../../users/entities/user.entity");
let CommentEntity = class CommentEntity extends base_model_1.BaseModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.RelationId)((comment) => comment.author),
    __metadata("design:type", String)
], CommentEntity.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => asset_entity_1.AssetEntity, (asset) => asset.comments),
    __metadata("design:type", asset_entity_1.AssetEntity)
], CommentEntity.prototype, "asset", void 0);
__decorate([
    (0, typeorm_1.RelationId)((comment) => comment.asset),
    __metadata("design:type", String)
], CommentEntity.prototype, "assetId", void 0);
CommentEntity = __decorate([
    (0, typeorm_1.Entity)('comments')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map