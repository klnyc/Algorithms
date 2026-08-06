// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into exactly two dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

const wordBreak2 = (s, wordDict) => {
  const words = {};

  for (let i = 0; i < wordDict.length; i++) words[wordDict[i]] = true;

  const scan = (string) => {
    for (let i = 0; i < string.length; i++) {
      const prefix = string.slice(0, i + 1);
      if (words[prefix]) {
        const suffix = string.slice(prefix.length);
        if (words[suffix]) return true;
      }
    }

    return false;
  };

  return scan(s);
};

const testCases = [
  { input: ["football", ["foot", "ball", "soccer"]], expected: true },
  { input: ["apple", ["apple", "pie"]], expected: false },
  { input: ["badbad", ["bad", "good"]], expected: true },
  {
    input: ["citrusfruitjuice", ["citrus", "fruit", "juice"]],
    expected: false,
  },
  { input: ["backstage", ["back", "stage", "backs", "tage"]], expected: true },
  { input: ["clockspeed", ["clock", "work"]], expected: false },
  { input: ["workforce", ["task", "force"]], expected: false },
  { input: ["at", ["a", "t", "b"]], expected: true },
  { input: ["", ["a", "b"]], expected: false },
  {
    input: ["supercalifragilistic", ["super", "califragilistic"]],
    expected: true,
  },
];

import test from "../Test.js";
test(wordBreak2, testCases);
