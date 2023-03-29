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
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("../../assets/entities/asset.entity");
const role_enum_1 = require("../../auth/enums/role.enum");
const base_model_1 = require("../../common/models/base.model");
const gender_enum_1 = require("../enums/gender.enum");
const wallet_entity_1 = require("./wallet.entity");
let UserEntity = class UserEntity extends base_model_1.BaseModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "aboutMe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: gender_enum_1.default,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_entity_1.AssetEntity, (asset) => asset.owner, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "assets", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => wallet_entity_1.WalletEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", wallet_entity_1.WalletEntity)
], UserEntity.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.RelationId)((user) => user.wallet),
    __metadata("design:type", String)
], UserEntity.prototype, "walletId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: role_enum_1.default,
        default: role_enum_1.default.User,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map