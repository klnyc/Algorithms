// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
// return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number
// to its traversing-order next in the array,
// which means you could search circularly to find its next greater number.
// If it doesn't exist, return -1 for this number.

const nextGreaterElementII = (nums) => {
  if (nums.length === 1) return [-1];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let firstHalf = nums.slice(0, i);
    let secondHalf = nums.slice(i + 1);
    let rotated = [...secondHalf, ...firstHalf];

    for (let j = 0; j < rotated.length; j++) {
      if (rotated[j] > num) {
        result.push(rotated[j]);
        break;
      } else if (j === rotated.length - 1) result.push(-1);
    }
  }

  return result;
};

const testCases = [
  {
    input: [[1, 2, 1]],
    expected: [2, -1, 2],
  },
  {
    input: [[1, 2, 3, 4, 3]],
    expected: [2, 3, 4, -1, 4],
  },
  {
    input: [[5, 4, 3, 2, 1]],
    expected: [-1, 5, 5, 5, 5],
  },
  {
    input: [[1, 1, 1, 1]],
    expected: [-1, -1, -1, -1],
  },
  {
    input: [[1]],
    expected: [-1],
  },
  {
    input: [[2, 1]],
    expected: [-1, 2],
  },
  {
    input: [[1, 5, 3, 6, 8]],
    expected: [5, 6, 6, 8, -1],
  },
  {
    input: [[-1, -2, -3, -1]],
    expected: [-1, -1, -1, -1],
  },
  {
    input: [[100, 1, 11, 1, 120, 111, 123, 1, -1, -100]],
    expected: [120, 11, 120, 120, 123, 123, -1, 100, 100, 100],
  },
  {
    input: [[3, 8, 4, 1, 2]],
    expected: [8, -1, 8, 2, 3],
  },
];

import test from "../Test.js";
test(nextGreaterElementII, testCases);
