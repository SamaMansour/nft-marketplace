"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const asset_entity_1 = require("../../../assets/entities/asset.entity");
(0, typeorm_seeding_1.define)(asset_entity_1.AssetEntity, (faker) => {
    const asset = new asset_entity_1.AssetEntity();
    asset.category = faker.random.word();
    asset.imageUrl = faker.image.imageUrl();
    asset.description = faker.lorem.sentence();
    asset.price = faker.random.number();
    asset.title = faker.lorem.sentence();
    return asset;
});
//# sourceMappingURL=asset.factory.js.map