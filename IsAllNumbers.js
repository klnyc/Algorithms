// Create a function to validate if the string contains all numbers only

const isAllNumbers = (string) => {
  if (!string) return false;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let number = Number(char);

    if (isNaN(number)) return false;
    if (char === " ") return false; // Number(' ') returns 0 instead of NaN
  }

  return true;
};

const testCases = [
  { input: [["123456"]], expected: true },
  { input: [["12345a"]], expected: false },
  { input: [["12 456"]], expected: false },
  { input: [["001456"]], expected: true },
];

import test from "./Test.js";
test(isAllNumbers, testCases);
