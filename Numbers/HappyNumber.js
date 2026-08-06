/**
 * 19 is a happy number
 * 1^2 + 9^2 = 1 + 81 = 82
 * 8^2 + 2^2 = 64 + 4 = 68
 * 6^2 + 8^2 = 36 + 64 = 100
 * 1^2 + 0^2 + 0^2 = 1 (Reaches 1)
 *
 * 4 is not a happy number
 * 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
 */

const happyNumber = (num) => {
  const squareDigits = (num, visited = {}) => {
    if (num === 1) return true;
    if (visited[num]) return false;
    visited[num] = true;

    let sum = 0;
    const string = String(num);
    for (let i = 0; i < string.length; i++) {
      let digit = Number(string[i]);
      sum = sum + digit * digit;
    }

    return squareDigits(sum, visited);
  };

  return squareDigits(num);
};

const testCases = [
  { input: [19], expected: true },
  { input: [4], expected: false },
];

import test from "../Test.js";
test(happyNumber, testCases);
