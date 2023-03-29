"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const comments_module_1 = require("./comments/comments.module");
const graphql_1 = require("@nestjs/graphql");
const posix_1 = require("path/posix");
const apollo_1 = require("@nestjs/apollo");
const auth_module_1 = require("./auth/auth.module");
const wallets_resolver_1 = require("./users/resolvers/wallets.resolver");
const transactions_module_1 = require("./transactions/transactions.module");
const assets_module_1 = require("./assets/assets.module");
const database_config_1 = require("./database/database.config");
const complexity_plugin_1 = require("./common/plugins/complexity.plugin");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: () => ({
                    playground: Boolean('GRAPHQL__PLAYGROUND'),
                    autoSchemaFile: (0, posix_1.join)(process.cwd(), 'src/schema.gql'),
                }),
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env', '.env.production'],
                load: [database_config_1.default],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => (Object.assign({}, configService.get('database'))),
            }),
            users_module_1.UsersModule,
            comments_module_1.CommentsModule,
            assets_module_1.AssetsModule,
            auth_module_1.AuthModule,
            transactions_module_1.TransactionsModule,
        ],
        controllers: [],
        providers: [wallets_resolver_1.WalletsResolver, complexity_plugin_1.ComplexityPlugin],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map