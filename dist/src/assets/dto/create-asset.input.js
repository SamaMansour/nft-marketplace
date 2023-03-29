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
exports.CreateAssetInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const is_image_url_decorator_1 = require("../../common/input-validation/is-image-url.decorator");
let CreateAssetInput = class CreateAssetInput {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, is_image_url_decorator_1.IsImageUrl)({ message: 'Must be a valid Image URL' }),
    __metadata("design:type", String)
], CreateAssetInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 255, {
        message: 'Title must be between 1 and 255 characters',
    }),
    __metadata("design:type", String)
], CreateAssetInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 1000, {
        message: 'Description must be between 1 and 1000 characters',
    }),
    __metadata("design:type", String)
], CreateAssetInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateAssetInput.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateAssetInput.prototype, "price", void 0);
CreateAssetInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAssetInput);
exports.CreateAssetInput = CreateAssetInput;
//# sourceMappingURL=create-asset.input.js.map