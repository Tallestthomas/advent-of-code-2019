"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_1_json_1 = require("./1-1.json");
var getFuel = function (mass) { return Math.floor(mass / 3) - 2; };
var calculateTotalFuel = function () {
    var total = 0;
    _1_1_json_1.inputs.forEach(function (val) { return total += getFuel(val); });
    return total;
};
console.log(calculateTotalFuel());
//# sourceMappingURL=1-1.js.map