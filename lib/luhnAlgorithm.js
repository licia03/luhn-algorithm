"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://it.wikipedia.org/wiki/Partita_IVA
function luhnValidate(value) {
    var arr = value
        .replace(/\s+/g, '')
        .split('')
        .reverse()
        .map(function (x) { return parseInt(x); });
    var sum = arr.reduce(function (acc, val, i) {
        return i % 2 === 0 ? acc + val : acc + (val * 2 > 9 ? val * 2 - 9 : val * 2);
    }, 0);
    return sum % 10 === 0;
}
exports.default = luhnValidate;
