import luhnValidate from './luhnAlgorithm';

test('valid value', () => {
  expect(luhnValidate('51194960947')).toBeTruthy();
  expect(luhnValidate('12312312312')).toBeTruthy();
  expect(luhnValidate(' 12312312312 ')).toBeTruthy();
  expect(luhnValidate('08145180967')).toBeTruthy();
  expect(luhnValidate('01813730387')).toBeTruthy();
  expect(luhnValidate('01813730387')).toBeTruthy();
  expect(luhnValidate('00000000000')).toBeTruthy();
});

test('invalid value', () => {
  expect(luhnValidate('12345678991')).toBeFalsy();
  expect(luhnValidate('32345678903')).toBeFalsy();
  expect(luhnValidate('13084980980')).toBeFalsy();
  expect(luhnValidate('345647')).toBeFalsy();
});
