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
var TransactionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const not_enough_balance_exception_1 = require("./../../users/exceptions/not-enough-balance.exception");
const asset_not_found_exception_1 = require("./../../assets/exceptions/asset-not-found.exception");
const wallets_service_1 = require("./../../users/services/wallets.service");
const transaction_repository_1 = require("./../repositories/transaction.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const assets_service_1 = require("../../assets/services/assets.service");
const buy_asset_forbidden_exception_1 = require("../../assets/exceptions/buy-asset-forbidden.exception");
let TransactionsService = TransactionsService_1 = class TransactionsService {
    constructor(transactionRepository, walletsService, assetsService, connection) {
        this.transactionRepository = transactionRepository;
        this.walletsService = walletsService;
        this.assetsService = assetsService;
        this.connection = connection;
        this.logger = new common_1.Logger(TransactionsService_1.name);
    }
    async buyAsset(assetId, buyer) {
        const asset = await this.assetsService.getAssetAndOwner(assetId);
        this.validateTransaction(asset, assetId, buyer);
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { id } = await queryRunner.manager.save(this.createBuyTransactionEntity(asset, buyer));
            await queryRunner.manager.save(await Promise.all([
                this.walletsService.increaseBalance(asset.owner.wallet, asset.price),
                this.walletsService.decreaseBalance(buyer.wallet, asset.price),
                this.assetsService.transferOwnership(asset, buyer),
                this.assetsService.increaseAssetValue(asset),
            ]));
            await queryRunner.commitTransaction();
            return this.transactionRepository.findOne(id, {
                relations: ['asset', 'buyer', 'seller', 'asset.owner'],
            });
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            this.logger.error(err, 'Error while buying asset, transaction rolled back');
            throw new Error('Something went wrong while buying asset');
        }
        finally {
            await queryRunner.release();
        }
    }
    async viewTransactions(user) {
        return await this.transactionRepository.find({
            where: [
                {
                    buyer: user,
                },
                { seller: user },
            ],
            relations: ['asset', 'buyer', 'seller', 'asset.owner'],
        });
    }
    validateTransaction(asset, assetId, buyer) {
        if (!asset)
            throw new asset_not_found_exception_1.AssetNotFoundException(assetId);
        if (asset.ownerId === buyer.id) {
            throw new buy_asset_forbidden_exception_1.BuyOwnAssetForbiddenException(assetId);
        }
        if (+buyer.wallet.balance < +asset.price) {
            throw new not_enough_balance_exception_1.NotEnoughBalanceException();
        }
    }
    createBuyTransactionEntity(asset, buyer) {
        const transaction = {
            asset,
            buyer,
            buyerId: buyer.id,
            seller: asset.owner,
            sellerId: asset.ownerId,
            assetId: asset.id,
            amount: asset.price,
        };
        return this.transactionRepository.create(transaction);
    }
};
TransactionsService = TransactionsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_repository_1.TransactionRepository,
        wallets_service_1.WalletsService,
        assets_service_1.AssetsService,
        typeorm_1.Connection])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map