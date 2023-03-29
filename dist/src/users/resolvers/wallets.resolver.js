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
exports.WalletsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const get_current_user_decorator_1 = require("../../auth/decorators/get-current-user.decorator");
const graphql_jwt_auth_guard_1 = require("../../auth/guards/graphql-jwt-auth.guard");
const wallet_output_1 = require("../dto/wallet.output");
const user_entity_1 = require("../entities/user.entity");
const wallets_service_1 = require("../services/wallets.service");
let WalletsResolver = class WalletsResolver {
    constructor(walletsService) {
        this.walletsService = walletsService;
    }
    async viewWallet(user) {
        return await this.walletsService.getWalletByOwner(user);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => wallet_output_1.WalletOutput),
    __param(0, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], WalletsResolver.prototype, "viewWallet", null);
WalletsResolver = __decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)((of) => wallet_output_1.WalletOutput),
    __metadata("design:paramtypes", [wallets_service_1.WalletsService])
], WalletsResolver);
exports.WalletsResolver = WalletsResolver;
//# sourceMappingURL=wallets.resolver.js.map