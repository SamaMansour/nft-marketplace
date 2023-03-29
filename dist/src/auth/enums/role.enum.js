"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
exports.default = Role;
(0, graphql_1.registerEnumType)(Role, { name: 'Role', description: 'User role' });
//# sourceMappingURL=role.enum.js.map