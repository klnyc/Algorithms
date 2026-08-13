// loop through string
// for each letter, expand to track each palindrome

// odd length ex. "aba"
// check if letter before and after are equal (while loop)
// if yes: if substring.length > result.length, update result
// if no: continue

// even length ex "aa"
// check if current letter and after are equal (while loop)
// if yes: if substring.length > result.length, update result
// if no: continue

const longestPalindromicSubstring = (string) => {
  let result = string[0];

  for (let i = 0; i < string.length; i++) {
    let leftIndex = i - 1;
    let rightIndex = i + 1;

    // check odd length palindrome
    while (
      string[leftIndex] &&
      string[rightIndex] &&
      string[leftIndex] === string[rightIndex]
    ) {
      let substring = string.slice(leftIndex, rightIndex + 1);
      if (substring.length > result.length) {
        result = substring;
      }
      leftIndex--;
      rightIndex++;
    }

    // reset pointers
    leftIndex = i;
    rightIndex = i + 1;

    // check even length palindrome
    while (string[rightIndex] && string[leftIndex] === string[rightIndex]) {
      let substring = string.slice(leftIndex, rightIndex + 1);
      if (substring.length > result.length) {
        result = substring;
      }
      leftIndex--;
      rightIndex++;
    }
  }

  return result;
};

const testCases = [
  {
    input: ["babad"],
    expected: "bab",
  },
  {
    input: ["cbbd"],
    expected: "bb",
  },
  {
    input: ["a"],
    expected: "a",
  },
  {
    input: ["ac"],
    expected: "a",
  },
  {
    input: ["racecar"],
    expected: "racecar",
  },
  {
    input: ["aaaa"],
    expected: "aaaa",
  },
  {
    input: ["abacdfgdcaba"],
    expected: "aba",
  },
  {
    input: ["bananas"],
    expected: "anana",
  },
  {
    input: ["abcdefg"],
    expected: "a",
  },
  {
    input: ["a1b22b1c"],
    expected: "1b22b1",
  },
];

import test from "../Test.js";
test(longestPalindromicSubstring, testCases);
