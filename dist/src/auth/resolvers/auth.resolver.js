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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("../services/auth.service");
const register_user_input_1 = require("../../users/dto/register-user.input");
const login_input_1 = require("../dto/login.input");
const access_token_output_1 = require("../dto/access-token.output");
const user_model_1 = require("../../users/models/user.model");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    login(loginInput) {
        return this.authService.login(loginInput);
    }
    register(registerUserInput) {
        return this.authService.register(registerUserInput);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => access_token_output_1.AccessTokenOutput),
    __param(0, (0, graphql_1.Args)('loginInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_model_1.User),
    __param(0, (0, graphql_1.Args)('registerUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_input_1.RegisterUserInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "register", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map