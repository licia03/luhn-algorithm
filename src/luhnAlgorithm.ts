// See https://it.wikipedia.org/wiki/Partita_IVA
export default function luhnValidate(value: string) {
  let arr = value
    .replace(/\s+/g, '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 === 0 ? acc + val : acc + (val * 2 > 9 ? val * 2 - 9 : val * 2),
    0,
  );

  return sum % 10 === 0;
}
