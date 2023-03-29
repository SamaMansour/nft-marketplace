"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.GetCurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    return graphql_1.GqlExecutionContext.create(ctx).getContext().req.user;
});
//# sourceMappingURL=get-current-user.decorator.js.map