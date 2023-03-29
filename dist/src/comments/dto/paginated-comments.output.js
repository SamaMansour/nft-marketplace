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
exports.PaginatedComments = void 0;
const comment_model_1 = require("./../models/comment.model");
const graphql_1 = require("@nestjs/graphql");
const pagination_info_output_1 = require("../../common/pagination-filtering/pagination-info.output");
let PaginatedComments = class PaginatedComments {
};
__decorate([
    (0, graphql_1.Field)((type) => pagination_info_output_1.PaginationInfo, {
        nullable: true,
    }),
    __metadata("design:type", pagination_info_output_1.PaginationInfo)
], PaginatedComments.prototype, "paginationInfo", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [comment_model_1.Comment], { nullable: true }),
    __metadata("design:type", Array)
], PaginatedComments.prototype, "comments", void 0);
PaginatedComments = __decorate([
    (0, graphql_1.ObjectType)()
], PaginatedComments);
exports.PaginatedComments = PaginatedComments;
//# sourceMappingURL=paginated-comments.output.js.map