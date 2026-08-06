// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can sell and buy the stock multiple times on the same day,
// ensuring you never hold more than one share of the stock.
// Find and return the maximum profit you can achieve.

// Track the profit
// Loop through the array and add the profit difference between each price and the price before it

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const prev = prices[i - 1];
    if (price > prev) {
      const diff = price - prev;
      profit += diff;
    }
  }

  return profit;
};

const testCases = [
  { input: [[7, 1, 5, 3, 6, 4]], expected: 7 },
  { input: [[1, 2, 3, 4, 5]], expected: 4 },
  { input: [[7, 6, 4, 3, 1]], expected: 0 },
  { input: [[1, 5, 1, 5, 1, 5]], expected: 12 },
  { input: [[2, 1, 2, 1, 2]], expected: 2 },
  { input: [[3, 3, 3, 3, 3]], expected: 0 },
  { input: [[1, 10, 9, 8, 7]], expected: 9 },
  { input: [[10, 20, 5, 15, 2]], expected: 20 },
  { input: [[1, 100]], expected: 99 },
  { input: [[5, 2, 10, 3, 8, 1, 2, 9]], expected: 21 },
];

import test from "../Test.js";
test(maxProfit, testCases);
