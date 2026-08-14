const wiggleSort = (array) => {
  array.sort((a, b) => a - b);
  const middleIndex = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex, array.length);

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = firstHalf.pop();
    } else {
      array[i] = secondHalf.pop();
    }
  }

  return array;
};

const testCases = [
  {
    input: [[1, 5, 1, 1, 6, 4]],
    expected: [1, 6, 1, 5, 1, 4],
  },
  {
    input: [[1, 3, 2, 2, 3, 1]],
    expected: [2, 3, 1, 3, 1, 2],
  },
  {
    input: [[1, 1, 2, 2, 2, 1]],
    expected: [1, 2, 1, 2, 1, 2],
  },
  {
    input: [[4, 5, 5, 6]],
    expected: [5, 6, 4, 5],
  },
  {
    input: [[1]],
    expected: [1],
  },
  {
    input: [[1, 2, 3, 4, 5, 6]],
    expected: [3, 6, 2, 5, 1, 4],
  },
  {
    input: [[6, 5, 4, 3, 2, 1]],
    expected: [3, 6, 2, 5, 1, 4],
  },
  {
    input: [[1, 2, 2, 3]],
    expected: [2, 3, 1, 2],
  },
  {
    input: [[3, 3, 3, 2, 2, 2]],
    expected: [2, 3, 2, 3, 2, 3],
  },
  {
    input: [[1, 4, 3, 4, 1, 2, 1, 3]],
    expected: [2, 4, 1, 4, 1, 3, 1, 3],
  },
];

import test from "../Test.js";
test(wiggleSort, testCases);
