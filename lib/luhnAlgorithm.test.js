"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var luhnAlgorithm_1 = __importDefault(require("./luhnAlgorithm"));
test('valid value', function () {
    expect(luhnAlgorithm_1.default('51194960947')).toBeTruthy();
    expect(luhnAlgorithm_1.default('12312312312')).toBeTruthy();
    expect(luhnAlgorithm_1.default(' 12312312312 ')).toBeTruthy();
    expect(luhnAlgorithm_1.default('08145180967')).toBeTruthy();
    expect(luhnAlgorithm_1.default('01813730387')).toBeTruthy();
    expect(luhnAlgorithm_1.default('01813730387')).toBeTruthy();
    expect(luhnAlgorithm_1.default('00000000000')).toBeTruthy();
});
test('invalid value', function () {
    expect(luhnAlgorithm_1.default('12345678991')).toBeFalsy();
    expect(luhnAlgorithm_1.default('32345678903')).toBeFalsy();
    expect(luhnAlgorithm_1.default('13084980980')).toBeFalsy();
    expect(luhnAlgorithm_1.default('345647')).toBeFalsy();
});
