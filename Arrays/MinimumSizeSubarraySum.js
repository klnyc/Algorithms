// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

const minimumSizeSubarraySum = (target, array) => {
  let min;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum = sum + array[j];
      if (sum >= target) {
        const length = j - i + 1;
        min = min ? Math.min(min, length) : length;
        break;
      }
    }
  }

  return min || 0;
};

const testCases = [
  {
    input: [7, [2, 3, 1, 2, 4, 3]],
    expected: 2,
  },
  {
    input: [4, [1, 4, 4]],
    expected: 1,
  },
  {
    input: [11, [1, 1, 1, 1, 1, 1, 1, 1]],
    expected: 0,
  },
  {
    input: [11, [1, 2, 3, 4, 5]],
    expected: 3,
  },
  {
    input: [5, [2, 3, 1, 1, 1, 1, 1]],
    expected: 2,
  },
  {
    input: [15, [1, 2, 3, 4, 5]],
    expected: 5,
  },
  {
    input: [100, [100]],
    expected: 1,
  },
  {
    input: [5, [1, 2, 3, 4]],
    expected: 2,
  },
  {
    input: [6, [10, 2, 3]],
    expected: 1,
  },
  {
    input: [80, [10, 20, 30, 40, 50]],
    expected: 2,
  },
];

import test from "../Test.js";
test(minimumSizeSubarraySum, testCases);
