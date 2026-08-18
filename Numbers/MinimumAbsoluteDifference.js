// Given an array of distinct integers arr,
// find all pairs of elements with the minimum absolute difference of any two elements.

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1.
// List all pairs with difference equal to 1 in ascending order.

const minimumAbsoluteDifference = (arr) => {
  const array = arr.sort((a, b) => a - b);
  let min = array[1] - array[0];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const diff = array[i + 1] - array[i];
    const pair = [array[i], array[i + 1]];

    if (min === diff) {
      result.push(pair);
    } else if (diff < min) {
      min = diff;
      result = [pair];
    }
  }

  return result;
};

const testCases = [
  {
    input: [[4, 2, 1, 3]],
    expected: [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    input: [[1, 3, 6, 10, 15]],
    expected: [[1, 3]],
  },
  {
    input: [[3, 8, -10, 23, 19, -4, -14, 27]],
    expected: [
      [-14, -10],
      [19, 23],
      [23, 27],
    ],
  },
  {
    input: [[1, 2]],
    expected: [[1, 2]],
  },
  {
    input: [[-5, -10, -15, -20]],
    expected: [
      [-20, -15],
      [-15, -10],
      [-10, -5],
    ],
  },
  {
    input: [[100, 200, 300, 400]],
    expected: [
      [100, 200],
      [200, 300],
      [300, 400],
    ],
  },
  {
    input: [[5, 1, 9, 3, 7]],
    expected: [
      [1, 3],
      [3, 5],
      [5, 7],
      [7, 9],
    ],
  },
  {
    input: [[-1, -2, -3, -4]],
    expected: [
      [-4, -3],
      [-3, -2],
      [-2, -1],
    ],
  },
  {
    input: [[10, 100, 1000]],
    expected: [[10, 100]],
  },
  {
    input: [[2, 4, 6, 8, 10]],
    expected: [
      [2, 4],
      [4, 6],
      [6, 8],
      [8, 10],
    ],
  },
];

import test from "../Test.js";
test(minimumAbsoluteDifference, testCases);
