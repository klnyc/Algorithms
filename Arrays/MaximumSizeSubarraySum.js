// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

const maximumSizeSubarraySum = (nums) => {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

const testCases = [
  {
    input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
    expected: 6,
  },
  {
    input: [[1]],
    expected: 1,
  },
  {
    input: [[5, 4, -1, 7, 8]],
    expected: 23,
  },
  {
    input: [[-1]],
    expected: -1,
  },
  {
    input: [[-5, -2, -3, -1, -4]],
    expected: -1,
  },
  {
    input: [[0, 0, 0, 0]],
    expected: 0,
  },
  {
    input: [[-2, -1]],
    expected: -1,
  },
  {
    input: [[10, -2, 3, -4, 5]],
    expected: 12,
  },
  {
    input: [[1, 2, 3, 4, 5]],
    expected: 15,
  },
  {
    input: [[-10, 20, -10, 20, -10]],
    expected: 30,
  },
];

import test from "../Test.js";
test(maximumSizeSubarraySum, testCases);
