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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const postgres_error_code_enum_1 = require("../../database/enums/postgres-error-code.enum");
const users_service_1 = require("../../users/services/users.service");
let AuthService = class AuthService {
    constructor(configService, usersService, jwtService) {
        this.configService = configService;
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(registrationData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.usersService.createUserWithWallet(Object.assign(Object.assign({}, registrationData), { password: hashedPassword }));
            createdUser.password = undefined;
            return createdUser;
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) === postgres_error_code_enum_1.default.UniqueViolation) {
                throw new common_1.BadRequestException('Username or email already exists');
            }
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(loginInput) {
        const { username, password } = loginInput;
        const user = await this.usersService.getUserByUsername(username);
        if (!user)
            throw new common_1.BadRequestException('Invalid credentials');
        await this.verifyPassword(password, user.password);
        const { id, firstName, lastName, email } = user;
        const payload = { id, username, firstName, lastName, email };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken };
    }
    async verifyPassword(plainTextPassword, hashedPassword) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordMatching) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map