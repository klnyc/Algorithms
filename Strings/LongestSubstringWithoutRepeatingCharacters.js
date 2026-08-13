// create a map of unique letters
// two pointers, left (start) and right
// move right pointer to track each letter into the map
// if letter already exists,
// move left pointer and delete each letter until it reaches the duplicate letter
// update max length with the substring length

const longestSubstringWithoutRepeatingCharacters = (string) => {
  const uniqueLetters = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < string.length) {
    let letter = string[right];

    if (!uniqueLetters[letter]) {
      uniqueLetters[letter] = true;
    } else {
      // if the letter already exists, delete all the letters before it to find the duplicate
      while (string[left] !== letter) {
        delete uniqueLetters[string[left]];
        left++;
      }
      // duplicate has been found, now skip over it
      left++;
    }

    maxLength = Math.max(maxLength, string.slice(left, right + 1).length);
    right++;
  }

  return maxLength;
};

const testCases = [
  {
    input: ["abcabcbb"],
    expected: 3,
  },
  {
    input: ["bbbbb"],
    expected: 1,
  },
  {
    input: ["pwwkew"],
    expected: 3,
  },
  {
    input: ["a"],
    expected: 1,
  },
  {
    input: ["abcdef"],
    expected: 6,
  },
  {
    input: ["au"],
    expected: 2,
  },
  {
    input: ["abba"],
    expected: 2,
  },
  {
    input: ["dvdf"],
    expected: 3,
  },
];

import test from "../Test.js";
test(longestSubstringWithoutRepeatingCharacters, testCases);
