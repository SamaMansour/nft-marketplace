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
exports.WalletEntity = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../common/models/base.model");
const coin_enum_1 = require("../enums/coin.enum");
const user_entity_1 = require("./user.entity");
let WalletEntity = class WalletEntity extends base_model_1.BaseModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WalletEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 6, default: 10000 }),
    __metadata("design:type", Number)
], WalletEntity.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.UserEntity, (user) => user.wallet),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], WalletEntity.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.RelationId)((wallet) => wallet.owner),
    __metadata("design:type", String)
], WalletEntity.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: coin_enum_1.default, default: coin_enum_1.default.CalapeCoin }),
    __metadata("design:type", String)
], WalletEntity.prototype, "coin", void 0);
WalletEntity = __decorate([
    (0, typeorm_1.Entity)('wallets'),
    (0, typeorm_1.Check)('"balance" >= 0')
], WalletEntity);
exports.WalletEntity = WalletEntity;
//# sourceMappingURL=wallet.entity.js.map