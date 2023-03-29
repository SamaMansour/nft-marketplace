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
var WalletsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsService = void 0;
const wallets_repository_1 = require("./../repositories/wallets.repository");
const common_1 = require("@nestjs/common");
const currency = require("currency.js");
let WalletsService = WalletsService_1 = class WalletsService {
    constructor(walletRepository) {
        this.walletRepository = walletRepository;
        this.logger = new common_1.Logger(WalletsService_1.name);
    }
    async createWallet(user) {
        return await this.walletRepository.createWallet(user);
    }
    async getWalletByOwner(owner) {
        return await this.walletRepository.findOne({
            where: { owner },
            relations: ['owner'],
        });
    }
    async increaseBalance(wallet, amount) {
        const increasedBalance = currency(wallet.balance, { precision: 8 }).add(amount).value;
        wallet.balance = increasedBalance;
        return wallet;
    }
    async decreaseBalance(wallet, amount) {
        const decreasedBalance = currency(wallet.balance, {
            precision: 8,
        }).subtract(amount).value;
        wallet.balance = decreasedBalance;
        return wallet;
    }
};
WalletsService = WalletsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wallets_repository_1.WalletsRepository])
], WalletsService);
exports.WalletsService = WalletsService;
//# sourceMappingURL=wallets.service.js.map