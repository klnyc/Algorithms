const pascalsTriangle = (number) => {
  const stack = [[1]];

  while (stack.length < number) {
    const lastItem = stack[stack.length - 1];
    const row = [1];

    for (let i = 0; i < lastItem.length; i++) {
      const num = lastItem[i];
      const nextNum = lastItem[i + 1];
      if (nextNum) {
        row.push(num + nextNum);
      }
    }

    row.push(1);
    stack.push(row);
  }

  return stack;
};

const testCases = [
  {
    input: [1],
    expected: [[1]],
  },
  {
    input: [2],
    expected: [[1], [1, 1]],
  },
  {
    input: [3],
    expected: [[1], [1, 1], [1, 2, 1]],
  },
  {
    input: [4],
    expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
  },
  {
    input: [5],
    expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
  },
  {
    input: [6],
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ],
  },
  {
    input: [7],
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
    ],
  },
  {
    input: [8],
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
    ],
  },
  {
    input: [9],
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
    ],
  },
  {
    input: [10],
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ],
  },
];

import test from "../Test.js";
test(pascalsTriangle, testCases);
