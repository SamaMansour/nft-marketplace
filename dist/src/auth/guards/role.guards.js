"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const RoleGuard = (role) => {
    class RoleGuardMixin {
        canActivate(context) {
            const { user } = graphql_1.GqlExecutionContext.create(context).getContext().req;
            return (user === null || user === void 0 ? void 0 : user.role) === role;
        }
    }
    return (0, common_1.mixin)(RoleGuardMixin);
};
exports.default = RoleGuard;
//# sourceMappingURL=role.guards.js.map