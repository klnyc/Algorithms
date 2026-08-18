// Split an array of item weights into two subsets, A and B,
// such that the sum of weights in A is strictly greater than the sum of weights in B,
// the size of A is minimal, and the elements of A are returned in increasing order

const optimizingBoxWeights = (array) => {
  const sorted = array.sort((a, b) => b - a);
  let sum = 0;
  let total = 0;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }

  for (let i = 0; i < sorted.length; i++) {
    const num = sorted[i];
    sum = sum + num;
    total = total - num;
    result.unshift(num);
    if (sum > total) return result;
  }

  return result;
};

const testCases = [
  {
    input: [[3, 7, 5, 6, 2]],
    expected: [6, 7],
  },
  {
    input: [[5, 3, 2, 4, 1, 2]],
    expected: [4, 5],
  },
  {
    input: [[1, 2, 2, 3, 4, 5]],
    expected: [4, 5],
  },
  {
    input: [[10, 20, 30, 40, 50]],
    expected: [40, 50],
  },
  {
    input: [[1, 1, 1, 1, 1, 6]],
    expected: [6],
  },
  {
    input: [[2, 4, 7]],
    expected: [7],
  },
  {
    input: [[10]],
    expected: [10],
  },
  {
    input: [[5, 5, 5, 5]],
    expected: [5, 5, 5],
  },
  {
    input: [[100, 1, 1, 1, 1]],
    expected: [100],
  },
  {
    input: [[6, 5, 4, 3, 2, 1]],
    expected: [5, 6],
  },
];

import test from "../Test.js";
test(optimizingBoxWeights, testCases);
