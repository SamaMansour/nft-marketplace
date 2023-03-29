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
exports.TransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("../../assets/entities/asset.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const coin_enum_1 = require("../../users/enums/coin.enum");
let TransactionEntity = class TransactionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: coin_enum_1.default,
        default: coin_enum_1.default.CalapeCoin,
    }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "coin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 6, default: 20 }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => asset_entity_1.AssetEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", asset_entity_1.AssetEntity)
], TransactionEntity.prototype, "asset", void 0);
__decorate([
    (0, typeorm_1.RelationId)((transaction) => transaction.asset),
    __metadata("design:type", String)
], TransactionEntity.prototype, "assetId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], TransactionEntity.prototype, "buyer", void 0);
__decorate([
    (0, typeorm_1.RelationId)((transaction) => transaction.buyer),
    __metadata("design:type", String)
], TransactionEntity.prototype, "buyerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], TransactionEntity.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.RelationId)((transaction) => transaction.seller),
    __metadata("design:type", String)
], TransactionEntity.prototype, "sellerId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "createdAt", void 0);
TransactionEntity = __decorate([
    (0, typeorm_1.Entity)('transactions')
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map