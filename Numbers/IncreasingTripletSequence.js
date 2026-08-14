const increasingTripletSequence = (numbers) => {
  let first = numbers[0];
  let second = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current <= first) {
      first = current;
    } else if (current <= second) {
      second = current;
    } else {
      return true;
    }
  }

  return false;
};

const testCases = [
  {
    input: [[1, 2, 3, 4, 5]],
    expected: true,
  },
  {
    input: [[5, 4, 3, 2, 1]],
    expected: false,
  },
  {
    input: [[2, 1, 5, 0, 4, 6]],
    expected: true,
  },
  {
    input: [[1, 1, 1, 1]],
    expected: false,
  },
  {
    input: [[20, 100, 10, 12, 5, 13]],
    expected: true,
  },
  {
    input: [[1, 5, 0, 4, 1, 3]],
    expected: true,
  },
  {
    input: [[1, 2]],
    expected: false,
  },
  {
    input: [[10, 9, 8, 7, 6, 5, 4, 3, 2, 11]],
    expected: false,
  },
  {
    input: [[1, 2, 1, 2, 1, 2]],
    expected: false,
  },
  {
    input: [[2, 4, -2, -3, -4]],
    expected: false,
  },
];

import test from "../Test.js";
test(increasingTripletSequence, testCases);
