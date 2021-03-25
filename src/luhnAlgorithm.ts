// See https://it.wikipedia.org/wiki/Partita_IVA

export type LuhnValidateFunction = (value: string) => boolean;

const luhnValidate: LuhnValidateFunction = (value) => {
  let arr = value
    .replace(/\s+/g, "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 === 0 ? acc + val : acc + (val * 2 > 9 ? val * 2 - 9 : val * 2),
    0
  );

  return sum % 10 === 0;
};

export default luhnValidate;
