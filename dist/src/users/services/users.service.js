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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const assets_repository_1 = require("./../../assets/repositories/assets.repository");
const user_not_found_exception_1 = require("./../exceptions/user-not-found.exception");
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../repositories/users.repository");
const wallets_service_1 = require("./wallets.service");
const role_enum_1 = require("../../auth/enums/role.enum");
const postgres_error_code_enum_1 = require("../../database/enums/postgres-error-code.enum");
const user_not_deleted_exception_1 = require("../exceptions/user-not-deleted.exception");
let UsersService = UsersService_1 = class UsersService {
    constructor(userRepository, assetsRepository, walletsService) {
        this.userRepository = userRepository;
        this.assetsRepository = assetsRepository;
        this.walletsService = walletsService;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    async createUserWithWallet(registrationData) {
        const user = await this.userRepository.createUser(registrationData);
        const wallet = await this.walletsService.createWallet(user);
        user.wallet = wallet;
        user.walletId = wallet.id;
        await this.userRepository.save(user);
        return user;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne(id, {
            relations: ['wallet'],
        });
        return user;
    }
    async updateUser(updateUserInput, user) {
        try {
            await this.userRepository.update(user.id, updateUserInput);
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) === postgres_error_code_enum_1.default.UniqueViolation) {
                throw new common_1.ForbiddenException("Can't update user with given username or email");
            }
        }
        const updatedUser = await this.userRepository.findOne(user.id, {
            relations: ['assets'],
        });
        return updatedUser;
    }
    async deleteUser(userId, user) {
        const assets = await this.assetsRepository.find({
            where: { owner: userId },
        });
        if (user.id === userId) {
            await this.userRepository.softDelete(userId);
            await this.assetsRepository.softRemove(assets);
            return user;
        }
        else if (user.role === role_enum_1.default.Admin) {
            const userToDelete = await this.userRepository.findOne(userId);
            if (!userToDelete)
                throw new user_not_found_exception_1.UserNotFoundException(userId);
            await this.userRepository.softDelete(userId);
            await this.assetsRepository.softRemove(assets);
            return userToDelete;
        }
        throw new common_1.UnauthorizedException(`You can't delete user with id: ${userId}`);
    }
    async restoreDeletedUser(userId) {
        const deletedUser = await this.userRepository.findOne(userId, {
            withDeleted: true,
        });
        if (!deletedUser)
            throw new user_not_found_exception_1.UserNotFoundException(userId);
        if (deletedUser.deletedAt === null) {
            throw new user_not_deleted_exception_1.UserNotDeletedException(userId);
        }
        const assets = await this.assetsRepository.find({
            where: { owner: userId },
            withDeleted: true,
        });
        const assetIds = assets.map((asset) => asset.id);
        await this.userRepository.restore(userId);
        await this.assetsRepository.restore(assetIds);
        return deletedUser;
    }
    async getUserByUsername(username) {
        return await this.userRepository.findOne({ where: { username } });
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        assets_repository_1.AssetsRepository,
        wallets_service_1.WalletsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map