"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const path_1 = require("path");
exports.default = (0, config_1.registerAs)('database', () => {
    return {
        type: 'postgres',
        logging: true,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        autoLoadEntities: true,
        synchronize: true,
        entities: [(0, path_1.join)(__dirname, '..', '/**/**/*.entity{.ts,.js}')],
        migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/database/migrations',
        },
        seeds: ['src/database/seeding/seeds/*{.ts,.js}'],
        factories: ['src/database/seeding/factories/*{.ts,.js}'],
    };
});
//# sourceMappingURL=database.config.js.map