// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Create a map of all words and visited substrings
// Create a helper to validate the string
// If the whole string is valid, then return true
// If the string exists in the visited map, return false (we already checked this string)
// Else, loop through string, segmenting the string up to each index, creating a prefix and postfix
// If prefix is valid, apply helper to postfix. If postfix is valid, return true
// If loop is over, return false

const wordBreak = (s, wordDict) => {
  const words = {};
  const visited = {};

  for (let i = 0; i < wordDict.length; i++) words[wordDict[i]] = true;

  const scan = (string) => {
    if (words[string]) return true;
    if (visited[string]) return false;
    visited[string] = true;

    for (let i = 0; i < string.length; i++) {
      const prefix = string.slice(0, i + 1);
      if (words[prefix]) {
        const postfix = string.slice(prefix.length);
        if (scan(postfix)) return true;
      }
    }

    return false;
  };

  return scan(s);
};

const testCases = [
  { input: ["leetcode", ["leet", "code"]], expected: true },
  { input: ["applepenapple", ["apple", "pen"]], expected: true },
  {
    input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
    expected: false,
  },
  { input: ["a", ["a"]], expected: true },
  { input: ["aaaaaaa", ["aaaa", "aaa"]], expected: true },
  { input: ["goals", ["go", "al"]], expected: false },
  { input: ["program", ["pro", "grammer", "gram"]], expected: true },
  { input: ["badcomplexbad", ["bad", "complex"]], expected: true },
  { input: ["", ["apple", "pie"]], expected: false },
  { input: ["abcdef", ["a", "abc", "b", "cd"]], expected: false },
];

import test from "../Test.js";
test(wordBreak, testCases);
