// take the first word, loop through the word
// test each prefix with every other word in the array in a double for loop
// if there is a mismatch, return the previous prefix

const longestCommonPrefix = (array) => {
  const firstWord = array[0];

  for (let i = 0; i < firstWord.length; i++) {
    const prefix = firstWord.slice(0, i + 1);

    for (let j = 0; j < array.length; j++) {
      const prefix2 = array[j].slice(0, i + 1);
      if (prefix !== prefix2) return firstWord.slice(0, i);
    }
  }

  return firstWord;
};

const testCases = [
  {
    input: [["flower", "flow", "flight"]],
    expected: "fl",
  },
  {
    input: [["dog", "racecar", "car"]],
    expected: "",
  },
  {
    input: [["interspace"]],
    expected: "interspace",
  },
  {
    input: [["", "b", "c"]],
    expected: "",
  },
  {
    input: [["test", "test", "test"]],
    expected: "test",
  },
  {
    input: [["prefix", "prefixes", "preliminary"]],
    expected: "pre",
  },
  {
    input: [["a", "a", "b"]],
    expected: "",
  },
  {
    input: [["interspecies", "interstellar", "interstate", "item"]],
    expected: "i",
  },
  {
    input: [["a", "a", "a"]],
    expected: "a",
  },
  {
    input: [["cir", "car"]],
    expected: "c",
  },
];

import test from "../Test.js";
test(longestCommonPrefix, testCases);
