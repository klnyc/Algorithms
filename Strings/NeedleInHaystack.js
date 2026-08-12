const needleInHaystack = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    let pointer = i;

    // needle cannot be longer than the haystack
    if (needle.length > haystack.length - i) return -1;

    for (let j = 0; j < needle.length; j++) {
      let target = haystack[pointer];
      let current = needle[j];

      // if the letters match and it's the last letter in the needle, needle is found
      if (target === current && j === needle.length - 1) {
        return i;
      }

      if (target === current) {
        pointer++;
      } else {
        break;
      }
    }
  }

  return -1;
};

const testCases = [
  {
    input: ["sadbutsad", "sad"],
    expected: 0,
  },
  {
    input: ["leetcode", "leeto"],
    expected: -1,
  },
  {
    input: ["hello", "ll"],
    expected: 2,
  },
  {
    input: ["aaaaa", "bba"],
    expected: -1,
  },
  {
    input: ["a", "a"],
    expected: 0,
  },
  {
    input: ["abc", "c"],
    expected: 2,
  },
  {
    input: ["mississippi", "issip"],
    expected: 4,
  },
  {
    input: ["short", "longerneedle"],
    expected: -1,
  },
  {
    input: ["aaa", "aaaa"],
    expected: -1,
  },
  {
    input: ["ababcabcabababd", "ababd"],
    expected: 10,
  },
];

import test from "../Test.js";
test(needleInHaystack, testCases);
