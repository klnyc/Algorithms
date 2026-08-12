const groupAnagrams = (words) => {
  const map = {};
  const results = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedWord = word.split("").sort().join("");

    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  }

  for (const sortedWord in map) {
    results.push(map[sortedWord]);
  }

  return results;
};

const testCases = [
  {
    input: [["eat", "tea", "tan", "ate", "nat", "bat"]],
    expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  },
  {
    input: [[""]],
    expected: [[""]],
  },
  {
    input: [["a"]],
    expected: [["a"]],
  },
  {
    input: [["cat", "dog", "pig"]],
    expected: [["cat"], ["dog"], ["pig"]],
  },
  {
    input: [["abc", "abc", "abc"]],
    expected: [["abc", "abc", "abc"]],
  },
  {
    input: [["aab", "baa", "aba", "baa"]],
    expected: [["aab", "baa", "aba", "baa"]],
  },
  {
    input: [["a", "ab", "ba", "abc", "cba", "bca"]],
    expected: [["a"], ["ab", "ba"], ["abc", "cba", "bca"]],
  },
  {
    input: [["", "", ""]],
    expected: [["", "", ""]],
  },
  {
    input: [["aab", "abb", "bab", "bba"]],
    expected: [["aab"], ["abb", "bab", "bba"]],
  },
  {
    input: [["listen", "silent", "enlist", "google", "gogole"]],
    expected: [
      ["listen", "silent", "enlist"],
      ["google", "gogole"],
    ],
  },
];

import test from "../Test.js";
test(groupAnagrams, testCases);
