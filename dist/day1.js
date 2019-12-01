"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day1_json_1 = require("./day1.json");
// Part 1
var getFuel = function (mass) { return Math.floor(mass / 3) - 2; };
var calculateTotalFuel = function () { return day1_json_1.inputs.map(function (val) { return getFuel(val); })
    .reduce(function (a, b) { return a + b; }, 0); };
console.log(calculateTotalFuel());
// Part 2
var getFuelRecursive = function (mass) {
    var fuel = Math.floor(mass / 3) - 2;
    return fuel > 0 ? fuel + getFuelRecursive(fuel) : 0;
};
var calculateTotalFuelRecursive = function () { return day1_json_1.inputs
    .map(function (val) { return getFuelRecursive(val); })
    .reduce(function (a, b) { return a + b; }, 0); };
console.log(calculateTotalFuelRecursive());
//# sourceMappingURL=day1.js.map