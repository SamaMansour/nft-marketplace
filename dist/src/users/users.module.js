"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const assets_repository_1 = require("./../assets/repositories/assets.repository");
const wallets_repository_1 = require("./repositories/wallets.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./services/users.service");
const users_resolver_1 = require("./resolvers/users.resolver");
const users_repository_1 = require("./repositories/users.repository");
const wallets_service_1 = require("./services/wallets.service");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                users_repository_1.UsersRepository,
                wallets_repository_1.WalletsRepository,
                assets_repository_1.AssetsRepository,
            ]),
        ],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService, wallets_service_1.WalletsService],
        exports: [
            typeorm_1.TypeOrmModule.forFeature([users_repository_1.UsersRepository, wallets_repository_1.WalletsRepository]),
            users_service_1.UsersService,
            wallets_service_1.WalletsService,
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map