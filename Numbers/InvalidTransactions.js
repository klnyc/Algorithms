// Transaction is invalid if:
// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction
// with the same name in a different city.

const invalidTransactions = (transactions) => {
  // { ["alice,20,800,mtv"]: ["alice", 20, 800, "mtv"] }
  const map = {};
  const results = [];

  // create a map for easy lookup of values
  for (let i = 0; i < transactions.length; i++) {
    const [name, time, amount, city] = transactions[i].split(",");
    map[transactions[i]] = [name, time, amount, city];
  }

  // double for loop, comparing every transaction with every transaction
  for (const transaction in map) {
    const [name, time, amount, city] = map[transaction];
    for (const transaction2 in map) {
      const [nameTemp, timeTemp, amountTemp, cityTemp] = map[transaction2];
      // don't compare to itself, unless it's the only transaction
      if (transaction === transaction2 && transactions.length > 1) continue;
      if (
        amount > 1000 ||
        (Math.abs(timeTemp - time) <= 60 &&
          city !== cityTemp &&
          name === nameTemp)
      ) {
        results.push(transaction);
        // once it's invalid, no need to continue comparing this transaction with others
        break;
      }
    }
  }

  return results;
};

const testCases = [
  {
    input: [["alice,20,800,mtv", "alice,50,100,beijing"]],
    expected: ["alice,20,800,mtv", "alice,50,100,beijing"],
  },
  {
    input: [["alice,20,800,mtv", "alice,50,1200,mtv"]],
    expected: ["alice,50,1200,mtv"],
  },
  {
    input: [["alice,20,800,mtv", "bob,50,1200,mtv"]],
    expected: ["bob,50,1200,mtv"],
  },
  {
    input: [["alice,20,800,mtv", "alice,81,100,beijing"]],
    expected: [],
  },
  {
    input: [["alice,20,800,mtv", "alice,80,100,beijing"]],
    expected: ["alice,20,800,mtv", "alice,80,100,beijing"],
  },
  {
    input: [["alice,20,800,mtv", "alice,50,100,mtv"]],
    expected: [],
  },
  {
    input: [["alice,20,1001,mtv"]],
    expected: ["alice,20,1001,mtv"],
  },
  {
    input: [["alice,20,800,mtv", "alice,20,800,beijing"]],
    expected: ["alice,20,800,mtv", "alice,20,800,beijing"],
  },
  {
    input: [
      ["alice,20,800,mtv", "alice,50,100,beijing", "alice,70,100,shanghai"],
    ],
    expected: [
      "alice,20,800,mtv",
      "alice,50,100,beijing",
      "alice,70,100,shanghai",
    ],
  },
  {
    input: [["alex,60,1001,bangkok", "alex,50,100,beijing"]],
    expected: ["alex,60,1001,bangkok", "alex,50,100,beijing"],
  },
];

import test from "../Test.js";
test(invalidTransactions, testCases);
