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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const get_current_user_decorator_1 = require("../../auth/decorators/get-current-user.decorator");
const graphql_jwt_auth_guard_1 = require("../../auth/guards/graphql-jwt-auth.guard");
const user_entity_1 = require("../../users/entities/user.entity");
const transaction_output_1 = require("../dto/transaction.output");
const transactions_service_1 = require("../services/transactions.service");
let TransactionsResolver = class TransactionsResolver {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    buyAsset(assetId, user) {
        return this.transactionsService.buyAsset(assetId, user);
    }
    viewTransactions(user) {
        return this.transactionsService.viewTransactions(user);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => transaction_output_1.TransactionOutput),
    __param(0, (0, graphql_1.Args)('assetId', { type: () => String })),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TransactionsResolver.prototype, "buyAsset", null);
__decorate([
    (0, graphql_1.Query)(() => [transaction_output_1.TransactionOutput]),
    __param(0, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TransactionsResolver.prototype, "viewTransactions", null);
TransactionsResolver = __decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => transaction_output_1.TransactionOutput),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsResolver);
exports.TransactionsResolver = TransactionsResolver;
//# sourceMappingURL=transactions.resolver.js.map