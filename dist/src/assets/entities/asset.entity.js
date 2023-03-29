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
exports.AssetEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const base_model_1 = require("../../common/models/base.model");
const user_entity_1 = require("../../users/entities/user.entity");
let AssetEntity = class AssetEntity extends base_model_1.BaseModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AssetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 6, default: 0 }),
    __metadata("design:type", Number)
], AssetEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null, type: 'timestamptz' }),
    __metadata("design:type", Date)
], AssetEntity.prototype, "lastSale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserEntity, (user) => user.assets),
    __metadata("design:type", user_entity_1.UserEntity)
], AssetEntity.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], AssetEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.RelationId)((asset) => asset.creator),
    __metadata("design:type", String)
], AssetEntity.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.RelationId)((asset) => asset.owner),
    __metadata("design:type", String)
], AssetEntity.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.asset, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], AssetEntity.prototype, "comments", void 0);
AssetEntity = __decorate([
    (0, typeorm_1.Entity)('asset'),
    (0, typeorm_1.Check)('"price" >= 0')
], AssetEntity);
exports.AssetEntity = AssetEntity;
//# sourceMappingURL=asset.entity.js.map