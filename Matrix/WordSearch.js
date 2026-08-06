// Input: board =
// [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]
// ], word = "SEE"
// Output: true

const wordSearch = (board, word) => {
  // index of the word, starts with 0
  const search = (index, row, column) => {
    let letter = board[row][column];
    if (letter !== word[index]) return false;
    if (index === word.length - 1) return true;
    board[row][column] = 0; // marks a visited cell
    if (board[row - 1] && board[row - 1][column]) {
      if (search(index + 1, row - 1, column)) return true;
    }
    if (board[row + 1] && board[row + 1][column]) {
      if (search(index + 1, row + 1, column)) return true;
    }
    if (board[row][column - 1]) {
      if (search(index + 1, row, column - 1)) return true;
    }
    if (board[row][column + 1]) {
      if (search(index + 1, row, column + 1)) return true;
    }
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (search(0, i, j)) return true;
      }
    }
  }

  return false;
};

const testCases = [
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED",
    ],
    expected: true,
  },
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE",
    ],
    expected: true,
  },
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB",
    ],
    expected: false,
  },
];

import test from "../Test.js";
test(wordSearch, testCases);
