"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const wallets_service_1 = require("./../users/services/wallets.service");
const users_module_1 = require("./../users/users.module");
const users_repository_1 = require("./../users/repositories/users.repository");
const transaction_repository_1 = require("./repositories/transaction.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transactions_resolver_1 = require("./resolvers/transactions.resolver");
const transactions_service_1 = require("./services/transactions.service");
const assets_module_1 = require("../assets/assets.module");
const assets_repository_1 = require("../assets/repositories/assets.repository");
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            assets_module_1.AssetsModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([
                transaction_repository_1.TransactionRepository,
                assets_repository_1.AssetsRepository,
                users_repository_1.UsersRepository,
            ]),
        ],
        providers: [transactions_resolver_1.TransactionsResolver, transactions_service_1.TransactionsService, wallets_service_1.WalletsService],
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map