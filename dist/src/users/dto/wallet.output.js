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
exports.WalletOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const coin_enum_1 = require("../enums/coin.enum");
const user_model_1 = require("../models/user.model");
let WalletOutput = class WalletOutput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WalletOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WalletOutput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], WalletOutput.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], WalletOutput.prototype, "owner", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WalletOutput.prototype, "ownerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => coin_enum_1.default),
    __metadata("design:type", String)
], WalletOutput.prototype, "coin", void 0);
WalletOutput = __decorate([
    (0, graphql_1.ObjectType)()
], WalletOutput);
exports.WalletOutput = WalletOutput;
//# sourceMappingURL=wallet.output.js.map