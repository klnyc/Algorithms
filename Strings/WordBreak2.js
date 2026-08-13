const wordBreak2 = (s, wordDict) => {
  const map = {};
  const results = [];

  for (let i = 0; i < wordDict.length; i++) map[wordDict[i]] = true;

  const scan = (string, path = []) => {
    if (!string.length) {
      results.push(path.join(" "));
    } else {
      for (let i = 0; i < string.length; i++) {
        const prefix = string.slice(0, i + 1);
        const suffix = string.slice(i + 1);
        if (map[prefix]) {
          scan(suffix, [...path, prefix]);
        }
      }
    }
  };

  scan(s);
  return results;
};

const testCases = [
  {
    input: ["catsanddog", ["cat", "cats", "and", "sand", "dog"]],
    expected: ["cat sand dog", "cats and dog"],
  },
  {
    input: [
      "pineapplepenapple",
      ["apple", "pen", "applepen", "pine", "pineapple"],
    ],
    expected: [
      "pine apple pen apple",
      "pine applepen apple",
      "pineapple pen apple",
    ],
  },
  {
    input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
    expected: [],
  },
  {
    input: ["apple", ["apple"]],
    expected: ["apple"],
  },
  {
    input: ["a", ["a"]],
    expected: ["a"],
  },
  {
    input: ["aaaaaaa", ["aaaa", "aaa", "aa"]],
    expected: ["aa aa aaa", "aa aaa aa", "aaa aa aa", "aaa aaaa", "aaaa aaa"],
  },
  {
    input: ["abcd", ["a", "abc", "b", "cd"]],
    expected: ["a b cd"],
  },
  {
    input: ["a", ["b"]],
    expected: [],
  },
  {
    input: ["bedbathandbeyond", ["bed", "bath", "and", "beyond", "bedbath"]],
    expected: ["bed bath and beyond", "bedbath and beyond"],
  },
];

import test from "../Test.js";
test(wordBreak2, testCases);
