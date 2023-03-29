"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class CommentNotFoundException extends common_1.NotFoundException {
    constructor(commentId) {
        super(`Comment with id: ${commentId} not found`);
    }
}
exports.CommentNotFoundException = CommentNotFoundException;
//# sourceMappingURL=comment-not-found.exception.js.map