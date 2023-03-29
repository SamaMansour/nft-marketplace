"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEnoughBalanceException = void 0;
const common_1 = require("@nestjs/common");
class NotEnoughBalanceException extends common_1.ForbiddenException {
    constructor() {
        super(`Not enough balance to perform transaction`);
    }
}
exports.NotEnoughBalanceException = NotEnoughBalanceException;
//# sourceMappingURL=not-enough-balance.exception.js.map