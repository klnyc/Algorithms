const integerToRoman = (num) => {
  const values = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let number = num;
  let result = "";

  while (number > 0) {
    for (let i = 0; i < values.length; i++) {
      const { value, symbol } = values[i];
      if (value <= number) {
        result += symbol;
        number -= value;
        break;
      }
    }
  }

  return result;
};

const testCases = [
  { input: [3], expected: "III" },
  { input: [3749], expected: "MMMDCCXLIX" },
  { input: [9], expected: "IX" },
  { input: [58], expected: "LVIII" },
  { input: [1994], expected: "MCMXCIV" },
  { input: [400], expected: "CD" },
  { input: [900], expected: "CM" },
  { input: [1066], expected: "MLXVI" },
  { input: [2024], expected: "MMXXIV" },
  { input: [3999], expected: "MMMCMXCIX" },
];

import test from "../Test.js";
test(integerToRoman, testCases);
