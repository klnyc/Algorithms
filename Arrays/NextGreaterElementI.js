// You are given two distinct integer arrays nums1 and nums2,
// where nums1 is a subset of nums2.
// For each element in nums1, find the first element to its right in nums2 that is greater than it.
// If no such element exists, the answer for that element is -1.

const nextGreaterElementI = (nums1, nums2) => {
  const result = [];
  const map = {};
  for (let i = 0; i < nums2.length; i++) map[nums2[i]] = i;
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    const indexFromNums2 = map[num];
    for (let j = indexFromNums2; j < nums2.length; j++) {
      if (nums2[j] > num) {
        result.push(nums2[j]);
        break;
      } else if (j === nums2.length - 1) result.push(-1);
    }
  }

  return result;
};

const testCases = [
  {
    input: [
      [4, 1, 2],
      [1, 3, 4, 2],
    ],
    expected: [-1, 3, -1],
  },
  {
    input: [
      [2, 4],
      [1, 2, 3, 4],
    ],
    expected: [3, -1],
  },
  {
    input: [
      [1, 3, 5, 2, 4],
      [6, 5, 4, 3, 2, 1, 7],
    ],
    expected: [7, 7, 7, 7, 7],
  },
  {
    input: [[1], [1]],
    expected: [-1],
  },
  {
    input: [
      [10, 20],
      [20, 10],
    ],
    expected: [-1, -1],
  },
  {
    input: [
      [1, 2],
      [2, 1],
    ],
    expected: [-1, -1],
  },
  {
    input: [
      [3, 1, 2],
      [3, 1, 2],
    ],
    expected: [-1, 2, -1],
  },
  {
    input: [
      [2, 1, 3],
      [2, 1, 3],
    ],
    expected: [3, 3, -1],
  },
  {
    input: [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
    expected: [2, 3, 4, -1],
  },
  {
    input: [
      [5, 4, 3, 2, 1],
      [5, 4, 3, 2, 1, 6],
    ],
    expected: [6, 6, 6, 6, 6],
  },
];

import test from "../Test.js";
test(nextGreaterElementI, testCases);
