"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsModule = void 0;
const comments_module_1 = require("./../comments/comments.module");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const assets_resolver_1 = require("./resolvers/assets.resolver");
const assets_repository_1 = require("./repositories/assets.repository");
const assets_service_1 = require("./services/assets.service");
const comments_service_1 = require("../comments/services/comments.service");
const comments_loader_1 = require("../comments/loaders/comments.loader");
let AssetsModule = class AssetsModule {
};
AssetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([assets_repository_1.AssetsRepository]),
            (0, common_1.forwardRef)(() => comments_module_1.CommentsModule),
        ],
        providers: [assets_resolver_1.AssetResolver, assets_service_1.AssetsService, comments_service_1.CommentsService, comments_loader_1.CommentsLoader],
        exports: [assets_service_1.AssetsService, typeorm_1.TypeOrmModule.forFeature([assets_repository_1.AssetsRepository])],
    })
], AssetsModule);
exports.AssetsModule = AssetsModule;
//# sourceMappingURL=assets.module.js.map