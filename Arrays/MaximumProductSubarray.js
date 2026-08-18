// Given an integer array nums,
// find a contiguous non-empty subarray that has the largest product,
// and return the product.
// Note that the product of an array with a single element is the value of that element.

const maximumProductSubarray = (nums) => {
  let max = nums[0];
  nums[0] = [nums[0], nums[0]]; // [max, min]

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    const [prevMax, prevMin] = nums[i - 1];
    const newMax = Math.max(prevMax * num, prevMin * num, num);
    const newMin = Math.min(prevMax * num, prevMin * num, num);
    nums[i] = [newMax, newMin];
    max = Math.max(max, newMax);
  }

  return max;
};

const testCases = [
  {
    input: [[2, 3, -2, 4]],
    expected: 6,
  },
  {
    input: [[-2, 0, -1]],
    expected: 0,
  },
  {
    input: [[-2]],
    expected: -2,
  },
  {
    input: [[0, 2]],
    expected: 2,
  },
  {
    input: [[-2, 3, -4]],
    expected: 24,
  },
  {
    input: [[2, -5, -2, -4, 3]],
    expected: 24,
  },
  {
    input: [[-1, -2, -3, -4]],
    expected: 24,
  },
  {
    input: [[0, 0, 0]],
    expected: 0,
  },
  {
    input: [[-2, -3, 0, -2, -40]],
    expected: 80,
  },
  {
    input: [[3, -1, 4]],
    expected: 4,
  },
];

import test from "../Test.js";
test(maximumProductSubarray, testCases);
