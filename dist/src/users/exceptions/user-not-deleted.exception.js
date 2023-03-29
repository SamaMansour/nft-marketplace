"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotDeletedException = void 0;
const common_1 = require("@nestjs/common");
class UserNotDeletedException extends common_1.ForbiddenException {
    constructor(userId) {
        super(`User with id: ${userId} not deleted`);
    }
}
exports.UserNotDeletedException = UserNotDeletedException;
//# sourceMappingURL=user-not-deleted.exception.js.map