const letterCasePermutation = (string) => {
  let results = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    const isNumber = !isNaN(Number(char));
    const lowerCase = char.toLowerCase();
    const uppercase = char.toUpperCase();

    if (results.length === 0) {
      isNumber ? results.push(char) : results.push(lowerCase, uppercase);
      continue;
    }

    let temp = [];

    for (let i = 0; i < results.length; i++) {
      let result = results[i];
      isNumber
        ? temp.push(result + char)
        : temp.push(result + lowerCase, result + uppercase);
    }

    results = temp;
  }

  return results;
};

const testCases = [
  { input: ["a1b2"], expected: ["a1b2", "a1B2", "A1b2", "A1B2"] },
  { input: ["3z4"], expected: ["3z4", "3Z4"] },
  { input: ["12345"], expected: ["12345"] },
  { input: ["a"], expected: ["a", "A"] },
  { input: ["Z"], expected: ["z", "Z"] },
  { input: ["ab"], expected: ["ab", "aB", "Ab", "AB"] },
  {
    input: ["ABC"],
    expected: ["abc", "abC", "aBc", "aBC", "Abc", "AbC", "ABc", "ABC"],
  },
  { input: ["C12D"], expected: ["c12d", "c12D", "C12d", "C12D"] },
];

import test from "../Test.js";
test(letterCasePermutation, testCases);
