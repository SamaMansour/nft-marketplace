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
exports.OrderBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const direction_enums_1 = require("./enums/direction.enums");
let OrderBy = class OrderBy {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true, defaultValue: 'createdAt' }),
    __metadata("design:type", String)
], OrderBy.prototype, "field", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, defaultValue: direction_enums_1.default.DESC }),
    __metadata("design:type", String)
], OrderBy.prototype, "direction", void 0);
OrderBy = __decorate([
    (0, graphql_1.InputType)()
], OrderBy);
exports.OrderBy = OrderBy;
//# sourceMappingURL=order-by.input.js.map