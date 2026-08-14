const reverseArray = (array) => {
  let result = array;
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const temp = result[start];
    result[start] = result[end];
    result[end] = temp;
    start++;
    end--;
  }

  return result;
};

const testCases = [
  {
    input: [["h", "e", "l", "l", "o"]],
    expected: ["o", "l", "l", "e", "h"],
  },
  {
    input: [["H", "a", "n", "n", "a", "h"]],
    expected: ["h", "a", "n", "n", "a", "H"],
  },
  {
    input: [["a"]],
    expected: ["a"],
  },
  {
    input: [["a", "b"]],
    expected: ["b", "a"],
  },
  {
    input: [[]],
    expected: [],
  },
  {
    input: [["a", "b", "c"]],
    expected: ["c", "b", "a"],
  },
  {
    input: [["a", "a", "a", "a"]],
    expected: ["a", "a", "a", "a"],
  },
  {
    input: [["A", "b", "C", "d", "E"]],
    expected: ["E", "d", "C", "b", "A"],
  },
  {
    input: [["x", "y", "z", "z", "y", "x"]],
    expected: ["x", "y", "z", "z", "y", "x"],
  },
  {
    input: [["a", "1", "!", " ", "B"]],
    expected: ["B", " ", "!", "1", "a"],
  },
];

import test from "../Test.js";
test(reverseArray, testCases);
