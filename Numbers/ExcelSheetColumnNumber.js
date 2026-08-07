const excelSheetColumnNumber = (columnTitle) => {
  const map = {};
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < letters.length; i++) {
    map[letters[i]] = i + 1;
  }

  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const letter = columnTitle[i];
    result = result * 26 + map[letter];
  }

  return result;
};

const testCases = [
  { input: ["A"], expected: 1 },
  { input: ["Z"], expected: 26 },
  { input: ["AA"], expected: 27 },
  { input: ["AB"], expected: 28 },
  { input: ["AZ"], expected: 52 },
  { input: ["BA"], expected: 53 },
  { input: ["ZY"], expected: 701 },
  { input: ["AAA"], expected: 703 },
  { input: ["FXSHRXW"], expected: 2147483647 },
  { input: ["LEET"], expected: 214442 },
];

import test from "../Test.js";
test(excelSheetColumnNumber, testCases);
