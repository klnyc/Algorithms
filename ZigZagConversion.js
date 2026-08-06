// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows

// Create a mapping for each row number to an empty array to store the letters of each row
// Add a row counter that starts from 1 (first row)
// Track direction up or down, start with down
// Loop through the string, push each letter into the row corresponding to the counter
// If direction is down, row++
// If direction is up, row--
// If counter is numRows, then change direction to up
// If counter is 1, then change direction to down
// Take all the arrays from the map, loop from 1 to numRows, join them into a string

var zigzagConvert = function (s, numRows) {
  if (numRows === 1) return s;

  const map = {};
  let row = 1;
  let direction = "down";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (map[row] === undefined) {
      map[row] = [];
    }

    const letter = s[i];
    map[row].push(letter);
    direction === "down" ? row++ : row--;
    if (row === numRows) direction = "up";
    if (row === 1) direction = "down";
  }

  for (let i = 1; i <= numRows; i++) {
    if (map[i] === undefined) break; // for the case when numRows > s.length
    const rowString = map[i].join("");
    result += rowString;
  }

  return result;
};

const testCases = [
  { input: ["PAYPALISHIRING", 3], expected: "PAHNAPLSIIGYIR" },
  { input: ["PAYPALISHIRING", 4], expected: "PINALSIGYAHRPI" },
  { input: ["A", 1], expected: "A" },
  { input: ["AB", 1], expected: "AB" },
  { input: ["ABC", 2], expected: "ACB" },
  { input: ["ABCD", 2], expected: "ACBD" },
  { input: ["GEEKSFORGEEKS", 3], expected: "GSGSEKFREKEOE" },
  { input: ["A", 2], expected: "A" },
  { input: ["SHORT", 10], expected: "SHORT" },
];

import test from "./Test.js";
test(zigzagConvert, testCases);
