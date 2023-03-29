"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsRepository = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("../entities/asset.entity");
let AssetsRepository = class AssetsRepository extends typeorm_1.Repository {
    async getAssetAndOwner(id) {
        return await this.findOne(id, {
            relations: ['owner', 'owner.wallet'],
        });
    }
    async createAsset(createAssetInput, user) {
        const newAsset = this.create(Object.assign(Object.assign({}, createAssetInput), { owner: user, creator: user, creatorId: user.id }));
        return await this.save(newAsset);
    }
    async getAssets(assetSearchArgs) {
        const { searchTerm, limit, offset, orderBy } = assetSearchArgs;
        const { field, direction: sortOrder } = orderBy;
        const [assets, count] = await this.findAndCount({
            where: [
                { title: (0, typeorm_1.ILike)(`%${searchTerm}%`) },
                { description: (0, typeorm_1.ILike)(`%${searchTerm}%`) },
                { category: (0, typeorm_1.ILike)(`%${searchTerm}%`) },
                { creator: { username: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
                { creator: { firstName: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
                { creator: { lastName: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
                { owner: { username: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
                { owner: { firstName: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
                { owner: { lastName: (0, typeorm_1.ILike)(`%${searchTerm}%`) } },
            ],
            order: {
                [field]: sortOrder,
            },
            skip: offset,
            take: limit,
            relations: ['owner', 'creator'],
        });
        return {
            assets,
            paginationInfo: {
                total: count,
                limit,
                offset,
            },
        };
    }
};
AssetsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(asset_entity_1.AssetEntity)
], AssetsRepository);
exports.AssetsRepository = AssetsRepository;
//# sourceMappingURL=assets.repository.js.map