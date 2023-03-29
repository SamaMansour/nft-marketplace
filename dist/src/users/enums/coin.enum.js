"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
var Coin;
(function (Coin) {
    Coin["CalapeCoin"] = "CalapeCoin";
    Coin["ArgCoin"] = "ArgCoin";
    Coin["PhilipCoin"] = "PhilipCoin";
})(Coin || (Coin = {}));
exports.default = Coin;
(0, graphql_1.registerEnumType)(Coin, { name: 'Coin', description: 'Coin type' });
//# sourceMappingURL=coin.enum.js.map