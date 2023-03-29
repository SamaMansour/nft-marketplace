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
exports.UserProfileOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const gender_enum_1 = require("../enums/gender.enum");
let UserProfileOutput = class UserProfileOutput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "aboutMe", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], UserProfileOutput.prototype, "birthDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => gender_enum_1.default),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileOutput.prototype, "lastName", void 0);
UserProfileOutput = __decorate([
    (0, graphql_1.ObjectType)()
], UserProfileOutput);
exports.UserProfileOutput = UserProfileOutput;
//# sourceMappingURL=user-profile.output.js.map