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
exports.RegisterUserInput = void 0;
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
const gender_enum_1 = require("../enums/gender.enum");
let RegisterUserInput = class RegisterUserInput {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.Length)(4, 20),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 60),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 60),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(254),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.Length)(6, 20),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RegisterUserInput.prototype, "birthDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => gender_enum_1.default, { nullable: true }),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "gender", void 0);
RegisterUserInput = __decorate([
    (0, graphql_1.InputType)()
], RegisterUserInput);
exports.RegisterUserInput = RegisterUserInput;
//# sourceMappingURL=register-user.input.js.map