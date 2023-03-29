"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsRepository = void 0;
const typeorm_1 = require("typeorm");
const wallet_entity_1 = require("../entities/wallet.entity");
let WalletsRepository = class WalletsRepository extends typeorm_1.Repository {
    async createWallet(owner) {
        const wallet = await this.create({
            owner,
            ownerId: owner.id,
        });
        return await this.save(wallet);
    }
};
WalletsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(wallet_entity_1.WalletEntity)
], WalletsRepository);
exports.WalletsRepository = WalletsRepository;
//# sourceMappingURL=wallets.repository.js.map