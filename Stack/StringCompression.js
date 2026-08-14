// Input: chars = ["a","a","b","b","c","c","c"]
// Output: 6
// Explanation: The groups are "aa", "bb", and "ccc".
// This compresses to "a2b2c3".
// After modifying the input array in-place,
// the first 6 characters of chars should be ["a","2","b","2","c","3"].

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: 4
// Explanation: The groups are "a" and "bbbbbbbbbbbb".
// This compresses to "ab12".
// After modifying the input array in-place,
// the first 4 characters of chars should be ["a","b","1","2"].

// create a stack [["a", 2]]
// create result = ""
// loop, if each letter = last item in the stack, increase its count
// rebuild string, loop through stack, add the letter and if number > 1, add string(number)

const stringCompression = (array) => {
  const stack = [];
  let result = "";

  for (let i = 0; i < array.length; i++) {
    let char = array[i];

    // if current char is equal to the last item's char, increase count
    if (stack[stack.length - 1] && char === stack[stack.length - 1][0]) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([char, 1]);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const [char, count] = stack[i];
    result = result + char + (count > 1 ? String(count) : "");
  }

  return result.length;
};

const testCases = [
  {
    input: [["a", "a", "b", "b", "c", "c", "c"]],
    expected: 6,
  },
  {
    input: [["a"]],
    expected: 1,
  },
  {
    input: [["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]],
    expected: 4,
  },
  {
    input: [["a", "b", "c"]],
    expected: 3,
  },
  {
    input: [["a", "a", "a", "b", "b", "a", "a"]],
    expected: 6,
  },
  {
    input: [
      ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b"],
    ],
    expected: 5,
  },
  {
    input: [["a", "a"]],
    expected: 2,
  },
  {
    input: [["1", "1", "2", "!", "!", "!"]],
    expected: 5,
  },
  {
    input: [["a", "b", "a", "b"]],
    expected: 4,
  },
  {
    input: [["z", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"]],
    expected: 4,
  },
];

import test from "../Test.js";
test(stringCompression, testCases);
