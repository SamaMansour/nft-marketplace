"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const comments_resolver_1 = require("./resolvers/comments.resolver");
const comments_repository_1 = require("./repositories/comments.repository");
const assets_module_1 = require("../assets/assets.module");
const assets_repository_1 = require("../assets/repositories/assets.repository");
const assets_service_1 = require("../assets/services/assets.service");
const users_service_1 = require("../users/services/users.service");
const users_module_1 = require("../users/users.module");
const comments_service_1 = require("./services/comments.service");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comments_repository_1.CommentsRepository, assets_repository_1.AssetsRepository]),
            users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => assets_module_1.AssetsModule),
        ],
        providers: [comments_resolver_1.CommentsResolver, comments_service_1.CommentsService, users_service_1.UsersService, assets_service_1.AssetsService],
        exports: [comments_service_1.CommentsService, typeorm_1.TypeOrmModule.forFeature([comments_repository_1.CommentsRepository])],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map