"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
var Direction;
(function (Direction) {
    Direction["ASC"] = "ASC";
    Direction["DESC"] = "DESC";
})(Direction || (Direction = {}));
exports.default = Direction;
(0, graphql_1.registerEnumType)(Direction, {
    name: 'Direction',
    description: 'Direction for sorting',
});
//# sourceMappingURL=direction.enums.js.map