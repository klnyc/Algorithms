// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Create a visited map
// Loop through numbers, get the difference between each number and the target
// Check if the difference exists in the map
// If yes, return the current index and the difference's index
// If no, add the current number to the map with its index

const twoSum = (nums, target) => {
  const visited = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const difference = target - current;

    if (visited[difference] !== undefined) {
      return [i, visited[difference]].sort((a, b) => a - b);
    } else {
      visited[current] = i;
    }
  }
};

const testCases = [
  { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
  { input: [[3, 2, 4], 6], expected: [1, 2] },
  { input: [[3, 3], 6], expected: [0, 1] },
  { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
  { input: [[10, -2, 5, 8], 8], expected: [0, 1] },
  { input: [[0, 4, 3, 0], 0], expected: [0, 3] },
  { input: [[1, 5, 8, 25, 3], 4], expected: [0, 4] },
  { input: [[1, 2, 3, 4, 5, 6], 7], expected: [2, 3] },
  { input: [[10, 20], 30], expected: [0, 1] },
];

import test from "./Test.js";
test(twoSum, testCases);
