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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const role_enum_1 = require("../../auth/enums/role.enum");
const get_current_user_decorator_1 = require("../../auth/decorators/get-current-user.decorator");
const graphql_jwt_auth_guard_1 = require("../../auth/guards/graphql-jwt-auth.guard");
const role_guards_1 = require("../../auth/guards/role.guards");
const update_user_input_1 = require("../dto/update-user.input");
const user_profile_output_1 = require("../dto/user-profile.output");
const user_entity_1 = require("../entities/user.entity");
const user_not_found_exception_1 = require("../exceptions/user-not-found.exception");
const user_model_1 = require("../models/user.model");
const users_service_1 = require("../services/users.service");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUserProfile(id) {
        const user = await this.usersService.getUserById(id);
        if (!user)
            throw new user_not_found_exception_1.UserNotFoundException(id);
        return user;
    }
    async updateUser(updateUserInput, user) {
        return await this.usersService.updateUser(updateUserInput, user);
    }
    async deleteUser(userId, user) {
        return await this.usersService.deleteUser(userId, user);
    }
    async restoreDeletedUser(userId) {
        return await this.usersService.restoreDeletedUser(userId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => user_profile_output_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUserProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_profile_output_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)('updateUserInput')),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_profile_output_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)('userId', { type: () => String })),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)((0, role_guards_1.default)(role_enum_1.default.Admin)),
    (0, graphql_1.Mutation)(() => user_profile_output_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)('userId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "restoreDeletedUser", null);
UsersResolver = __decorate([
    (0, common_1.UseGuards)(graphql_jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => user_model_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map