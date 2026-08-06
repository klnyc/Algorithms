// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// If prices.length is 1 or 0, return 0
// Loop and keep track of the lowest number and max profit difference

const maxProfit = (prices) => {
  if (prices.length === 0 || prices.length === 1) return 0;

  let lowest = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const diff = price - lowest;
    max = Math.max(max, diff);
    lowest = Math.min(price, lowest);
  }

  return max;
};

const testCases = [
  { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
  { input: [[1, 2, 10, 1, 11]], expected: 10 },
  { input: [[7, 6, 4, 3, 1]], expected: 0 },
  { input: [[5, 5, 5, 5]], expected: 0 },
  { input: [[1, 5]], expected: 4 },
  { input: [[5, 1]], expected: 0 },
  { input: [[10, 2, 3, 4, 5]], expected: 3 },
  { input: [[1, 10, 0, 0, 0]], expected: 9 },
  { input: [[10, 10, 10, 1, 10]], expected: 9 },
  { input: [[100, 180, 260, 310, 40, 535, 695]], expected: 655 },
];

import test from "../Test.js";
test(maxProfit, testCases);
