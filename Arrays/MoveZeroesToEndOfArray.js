const moveZeroesToEndOfArray = (numbers) => {
  let read = 0;
  let write = 0;

  // move read pointer
  while (read < numbers.length) {
    // if the number is not a 0, write the number at the write pointer
    if (numbers[read] !== 0) {
      numbers[write] = numbers[read];
      write++;
    }
    read++;
  }

  // fill out remaining spots with 0
  while (write < numbers.length) {
    numbers[write] = 0;
    write++;
  }

  return numbers;
};

const testCases = [
  {
    input: [[0, 1, 0, 3, 12]],
    expected: [1, 3, 12, 0, 0],
  },
  {
    input: [[0]],
    expected: [0],
  },
  {
    input: [[1, 2, 3, 4]],
    expected: [1, 2, 3, 4],
  },
  {
    input: [[0, 0, 0]],
    expected: [0, 0, 0],
  },
  {
    input: [[1, 0, 0, 2, 3]],
    expected: [1, 2, 3, 0, 0],
  },
  {
    input: [[0, 0, 1]],
    expected: [1, 0, 0],
  },
  {
    input: [[4, 2, 4, 0, 0, 3, 0, 5, 1, 0]],
    expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0],
  },
  {
    input: [[-1, 0, -3, 0, 5]],
    expected: [-1, -3, 5, 0, 0],
  },
  {
    input: [[1, 0]],
    expected: [1, 0],
  },
  {
    input: [[0, 1]],
    expected: [1, 0],
  },
];

import test from "../Test.js";
test(moveZeroesToEndOfArray, testCases);
