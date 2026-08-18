// Given a sorted integer array arr,
// two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order.

const findKClosestElements = (array, k, x) => {
  const sorted = array.sort((a, b) => Math.abs(x - a) - Math.abs(x - b));
  return sorted.slice(0, k).sort((a, b) => a - b);
};

const testCases = [
  {
    input: [[1, 2, 3, 4, 5], 4, 3],
    expected: [1, 2, 3, 4],
  },
  {
    input: [[1, 2, 3, 4, 5], 4, -1],
    expected: [1, 2, 3, 4],
  },
  {
    input: [[1, 1, 1, 10, 10, 10], 1, 9],
    expected: [10],
  },
  {
    input: [[1, 2, 3, 4, 5], 4, 6],
    expected: [2, 3, 4, 5],
  },
  {
    input: [[0, 0, 1, 2, 3, 3, 4, 7, 7, 8], 3, 5],
    expected: [3, 3, 4],
  },
  {
    input: [[1], 1, 1],
    expected: [1],
  },
  {
    input: [[1, 2], 1, 1],
    expected: [1],
  },
  {
    input: [[1, 3, 5, 7, 9], 3, 4],
    expected: [1, 3, 5],
  },
  {
    input: [[-2, -1, 1, 2, 3, 4, 5], 3, 0],
    expected: [-2, -1, 1],
  },
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 5],
    expected: [3, 4, 5, 6, 7],
  },
];

import test from "../Test.js";
test(findKClosestElements, testCases);
