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
var AssetsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const currency = require("currency.js");
const role_enum_1 = require("../../auth/enums/role.enum");
const asset_not_deleted_exception_1 = require("../exceptions/asset-not-deleted.exception");
const asset_not_found_exception_1 = require("../exceptions/asset-not-found.exception");
const assets_repository_1 = require("../repositories/assets.repository");
let AssetsService = AssetsService_1 = class AssetsService {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
        this.logger = new common_1.Logger(AssetsService_1.name);
    }
    async createAsset(createAssetInput, user) {
        return await this.assetRepository.createAsset(createAssetInput, user);
    }
    async transferOwnership(asset, newOwner) {
        asset.owner = newOwner;
        asset.ownerId = newOwner.id;
        asset.lastSale = new Date();
        return asset;
    }
    async getAssets(assetSearchArgs) {
        return await this.assetRepository.getAssets(assetSearchArgs);
    }
    async getAssetAndOwner(assetId) {
        const asset = await this.assetRepository.getAssetAndOwner(assetId);
        if (!asset)
            throw new asset_not_found_exception_1.AssetNotFoundException(assetId);
        return asset;
    }
    async increaseAssetValue(asset) {
        const { price } = asset;
        const newPrice = currency(price, { precision: 8 }).multiply(1.1).value;
        asset.price = newPrice;
        return asset;
    }
    async removeAsset(id, user) {
        const asset = await this.assetRepository.findOne({ where: { id } });
        if (!asset)
            throw new asset_not_found_exception_1.AssetNotFoundException(id);
        if (asset.ownerId === user.id || user.role === role_enum_1.default.Admin) {
            await this.assetRepository.softDelete(id);
            return asset;
        }
        else {
            throw new common_1.UnauthorizedException('You are not authorized to delete this asset');
        }
    }
    async restoreDeletedAsset(id) {
        const asset = await this.assetRepository.findOne(id, {
            withDeleted: true,
            relations: ['owner'],
        });
        if (!asset)
            throw new asset_not_found_exception_1.AssetNotFoundException(id);
        if (asset.deletedAt === null) {
            throw new asset_not_deleted_exception_1.AssetNotDeletedException(id);
        }
        await this.assetRepository.restore(id);
        return asset;
    }
};
AssetsService = AssetsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [assets_repository_1.AssetsRepository])
], AssetsService);
exports.AssetsService = AssetsService;
//# sourceMappingURL=assets.service.js.map