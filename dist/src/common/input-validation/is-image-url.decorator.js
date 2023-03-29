"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsImageUrl = exports.IsImageUrlConstraint = void 0;
const class_validator_1 = require("class-validator");
const file_type_1 = require("file-type");
const got_cjs_1 = require("got-cjs");
let IsImageUrlConstraint = class IsImageUrlConstraint {
    async validate(imageUrl, args) {
        try {
            const stream = got_cjs_1.default.stream(imageUrl);
            const fileType = await (0, file_type_1.fromStream)(stream);
            return fileType.mime.startsWith('image/');
        }
        catch (err) {
            return false;
        }
    }
    defaultMessage(validationArguments) {
        return 'Must be a valid Image URL';
    }
};
IsImageUrlConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], IsImageUrlConstraint);
exports.IsImageUrlConstraint = IsImageUrlConstraint;
function IsImageUrl(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsImageUrlConstraint,
        });
    };
}
exports.IsImageUrl = IsImageUrl;
//# sourceMappingURL=is-image-url.decorator.js.map