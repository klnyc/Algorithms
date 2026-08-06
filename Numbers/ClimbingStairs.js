// You are climbing a staircase that takes n steps to reach the top.
// Each time you can either climb 1 step or 2 steps.
// In how many distinct ways can you climb to the top?
// The number of ways to reach step n is equal to the
// sum of ways to reach step n - 1 and n - 2

const climbingStairs = (n) => {
  const climb = (number, memo = {}) => {
    if (number <= 0) return 0;
    if (number === 1) return 1;
    if (number === 2) return 2;
    if (memo[number]) return memo[number];
    memo[number] = climb(number - 1, memo) + climb(number - 2, memo);
    return memo[number];
  };

  return climb(n);
};

const testCases = [
  { input: [1], expected: 1 },
  { input: [2], expected: 2 },
  { input: [3], expected: 3 },
  { input: [4], expected: 5 },
  { input: [5], expected: 8 },
  { input: [6], expected: 13 },
  { input: [7], expected: 21 },
  { input: [8], expected: 34 },
  { input: [10], expected: 89 },
  { input: [45], expected: 1836311903 },
];

import test from "../Test.js";
test(climbingStairs, testCases);
