"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
exports.default = Gender;
(0, graphql_1.registerEnumType)(Gender, { name: 'Gender', description: 'The users gender' });
//# sourceMappingURL=gender.enum.js.map