"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const wallet_entity_1 = require("../../../users/entities/wallet.entity");
(0, typeorm_seeding_1.define)(wallet_entity_1.WalletEntity, (faker) => {
    const wallet = new wallet_entity_1.WalletEntity();
    wallet.balance = 20000;
    return wallet;
});
//# sourceMappingURL=wallet.factory.js.map