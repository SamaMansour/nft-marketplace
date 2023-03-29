"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const database_config_1 = require("./src/database/database.config");
config_1.ConfigModule.forRoot({
    isGlobal: true,
    load: [database_config_1.default],
});
exports.default = (0, database_config_1.default)();
//# sourceMappingURL=ormconfig.js.map