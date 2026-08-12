// You are given an array of strings products and a string searchWord.
// Design a system that suggests at most three product names from products after each character of searchWord is typed.
// Suggested products should have common prefix with searchWord.
// If there are more than three products with a common prefix return the three lexicographically minimums products.
// Return a list of lists of the suggested products after each character of searchWord is typed.

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]

// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"].

const searchSuggestionsSystem = (products, searchWord) => {
  const results = [];
  const words = products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    const prefix = searchWord.slice(0, i + 1);
    const matches = words.filter((word) => word.slice(0, i + 1) === prefix);
    results.push(matches.slice(0, 3));
  }

  return results;
};

const testCases = [
  {
    input: [["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"],
    expected: [
      ["mobile", "moneypot", "monitor"],
      ["mobile", "moneypot", "monitor"],
      ["mouse", "mousepad"],
      ["mouse", "mousepad"],
      ["mouse", "mousepad"],
    ],
  },
  {
    input: [["havana"], "havana"],
    expected: [
      ["havana"],
      ["havana"],
      ["havana"],
      ["havana"],
      ["havana"],
      ["havana"],
    ],
  },
  {
    input: [["bags", "baggage", "banner", "box", "cloths"], "bags"],
    expected: [
      ["baggage", "bags", "banner"],
      ["baggage", "bags", "banner"],
      ["baggage", "bags"],
      ["bags"],
    ],
  },
  {
    input: [["havana"], "tatiana"],
    expected: [[], [], [], [], [], [], []],
  },
  {
    input: [["code", "coder"], "code"],
    expected: [
      ["code", "coder"],
      ["code", "coder"],
      ["code", "coder"],
      ["code", "coder"],
    ],
  },
  {
    input: [["apple", "apricot", "avocado", "banana"], "a"],
    expected: [["apple", "apricot", "avocado"]],
  },
  {
    input: [["a", "aa", "aaa", "aaaa", "aaaaa"], "a"],
    expected: [["a", "aa", "aaa"]],
  },
  {
    input: [["cat", "cater", "cartoon", "caterpillar"], "cat"],
    expected: [
      ["cartoon", "cat", "cater"],
      ["cartoon", "cat", "cater"],
      ["cat", "cater", "caterpillar"],
    ],
  },
  {
    input: [["z"], "z"],
    expected: [["z"]],
  },
  {
    input: [["app", "apple"], "applepie"],
    expected: [
      ["app", "apple"],
      ["app", "apple"],
      ["app", "apple"],
      ["apple"],
      ["apple"],
      [],
      [],
      [],
    ],
  },
];

import test from "../Test.js";
test(searchSuggestionsSystem, testCases);
