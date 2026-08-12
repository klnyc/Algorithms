const removeKDigits = (string, k) => {
  let stack = [];
  let count = k;

  for (let i = 0; i < string.length; i++) {
    let number = string[i];
    while (stack.length > 0 && count > 0 && number < stack[stack.length - 1]) {
      stack.pop();
      count--;
    }
    stack.push(number);
  }

  // If digits are increasing (e.g., 12345), pop the remaining k elements from the end
  while (count > 0) {
    stack.pop();
    count--;
  }

  // Remove leading zeroes
  while (stack[0] === "0") {
    stack.shift();
  }

  if (!stack.length) return "0";
  return stack.join("");
};

const testCases = [
  { input: ["1432219", 3], expected: "1219" },
  { input: ["10200", 1], expected: "200" },
  { input: ["10", 2], expected: "0" },
  { input: ["1234567890", 3], expected: "1234560" },
  { input: ["9876543210", 3], expected: "6543210" },
  { input: ["9", 1], expected: "0" },
  { input: ["112", 1], expected: "11" },
  { input: ["00000", 2], expected: "0" },
  { input: ["10200", 0], expected: "10200" },
  { input: ["10001", 4], expected: "0" },
];

import test from "../Test.js";
test(removeKDigits, testCases);
