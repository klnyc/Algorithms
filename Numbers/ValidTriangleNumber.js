// Given an integer array nums,
// return the number of triplets chosen from the array
// that can make triangles if we take them as side lengths of a triangle.

// Three side lengths a, b, c form a valid triangle if and only if a + b > c

const validTriangleNumber = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i]
        )
          count++;
      }
    }
  }
  return count;
};

const testCases = [
  {
    input: [[2, 2, 3, 4]],
    expected: 3,
  },
  {
    input: [[4, 2, 3, 4]],
    expected: 4,
  },
  {
    input: [[0, 0, 0]],
    expected: 0,
  },
  {
    input: [[1, 1, 1, 1]],
    expected: 4,
  },
  {
    input: [[10, 21, 22, 100, 101, 200, 300]],
    expected: 6,
  },
  {
    input: [[1, 2, 3, 4, 5, 6]],
    expected: 7,
  },
  {
    input: [[0, 1, 0, 1]],
    expected: 0,
  },
  {
    input: [[7, 0, 0, 0]],
    expected: 0,
  },
  {
    input: [[3, 4, 5]],
    expected: 1,
  },
  {
    input: [[2, 3, 4, 4, 4]],
    expected: 10,
  },
];

import test from "../Test.js";
test(validTriangleNumber, testCases);
