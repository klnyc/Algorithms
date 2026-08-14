const rotateArray = (array, k) => {
  const steps = k % array.length;
  while (k > 0) {
    array.unshift(array.pop());
    k--;
  }
  return array;
};

const testCases = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7], 3],
    expected: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    input: [[-1, -100, 3, 99], 2],
    expected: [3, 99, -1, -100],
  },
  {
    input: [[1], 0],
    expected: [1],
  },
  {
    input: [[1, 2], 3],
    expected: [2, 1],
  },
  {
    input: [[1, 2, 3, 4], 4],
    expected: [1, 2, 3, 4],
  },
  {
    input: [[1, 2, 3, 4, 5], 0],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [[1, 2, 3], 5],
    expected: [2, 3, 1],
  },
  {
    input: [[10, 20], 1],
    expected: [20, 10],
  },
  {
    input: [[1, 2, 3, 4, 5, 6], 2],
    expected: [5, 6, 1, 2, 3, 4],
  },
  {
    input: [[-1], 2],
    expected: [-1],
  },
];

import test from "../Test.js";
test(rotateArray, testCases);
