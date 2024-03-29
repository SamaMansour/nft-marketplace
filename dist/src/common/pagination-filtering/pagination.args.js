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
exports.PaginationArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const order_by_input_1 = require("./order-by.input");
let PaginationArgs = class PaginationArgs {
};
__decorate([
    (0, graphql_1.Field)({ defaultValue: 10, nullable: true }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: 0, nullable: true }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "offset", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_input_1.OrderBy, {
        defaultValue: { field: 'createdAt', sortOrder: 'DESC' },
        nullable: true,
    }),
    __metadata("design:type", order_by_input_1.OrderBy)
], PaginationArgs.prototype, "orderBy", void 0);
PaginationArgs = __decorate([
    (0, graphql_1.ArgsType)()
], PaginationArgs);
exports.PaginationArgs = PaginationArgs;
//# sourceMappingURL=pagination.args.js.map