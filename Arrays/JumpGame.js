// Return true or false if you can jump to the last index
// with each number representing how far you can jump

const jumpGame = (numbers) => {
  const target = numbers.length - 1;

  const jump = (index, visited = {}) => {
    if (index >= target) return true;

    const distance = numbers[index];
    if (distance) {
      for (let i = 0; i < distance; i++) {
        if (jump(index + i + 1)) return true;
      }
    }
  };

  if (jump(0)) return true;
  return false;
};

const testCases = [
  {
    input: [[2, 3, 1, 1, 4]],
    expected: true,
  },
  {
    input: [[3, 2, 1, 0, 4]],
    expected: false,
  },
  {
    input: [[0]],
    expected: true,
  },
  {
    input: [[2, 0, 0]],
    expected: true,
  },
  {
    input: [[1, 0, 1, 0]],
    expected: false,
  },
  {
    input: [[0, 1]],
    expected: false,
  },
  {
    input: [[1, 1, 1, 1]],
    expected: true,
  },
  {
    input: [[5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]],
    expected: true,
  },
  {
    input: [[1, 2, 0, 1, 0, 0]],
    expected: false,
  },
  {
    input: [[3, 0, 8, 2, 0, 0, 1]],
    expected: true,
  },
];

import test from "../Test.js";
test(jumpGame, testCases);
