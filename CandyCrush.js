// Given a single string of characters (e.g., "aaabbbacd")
// representing a line of candies
// identify any contiguous group of 3 or more consecutive identical characters.
// Remove them.  Concatenate the remaining left and right sides together.
// Repeat cascading removals until no groups of 3+ consecutive characters remain.
// You should greedily remove characters from left to right.

// Input: "aabbbacd"
// Output: "cd"
// Explanation:
// 1. Remove 3 'b': "aabbbacd" => "aaacd"
// 2. Remove 3 'a': "aaacd" => "cd"
// i = 0 | stack = (a, 1)
// i = 1 | stack = (a, 2)
// i = 2 | stack = (a, 2) | (b, 1)
// i = 3 | stack = (a, 2) | (b, 2)
// i = 4 | stack = (a, 2)
// i = 5 | stack =
// i = 6 | stack = (c, 1)
// i = 7 | stack = (c, 1) | (d, 1)

// create a stack []
// loop through string
// track each char and it's consecutive frequency { char, count }
// if char == last item in stack && and frequency + 1 >= 3, stack.pop()
// else, stack.push({ char, count: 1 })
// transform back into string at the end

// const candyCrush = (string) => {
//   const stack = [];
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];

//     if (!stack[stack.length - 1]) {
//       // if no characters in stack
//       stack.push({ char, count: 1 });
//     } else if (char === stack[stack.length - 1].char) {
//       // if last character in stack matches current character
//       if (stack[stack.length - 1].count + 1 >= 3) {
//         stack.pop();
//       } else {
//         stack[stack.length - 1].count += 1;
//       }
//     } else {
//       // if last character in stack does not match current character
//       stack.push({ char, count: 1 });
//     }
//   }

//   for (let i = 0; i < stack.length; i++) {
//     let char = stack[i];
//     result =
//       char.count === 1 ? result + char.char : result + char.char + char.char;
//   }

//   return result;
// };

const testCases = [
  { input: ["aaabbbc"], expected: "c" },
  { input: ["aabbbacd"], expected: "cd" },
  { input: ["aabbccddeeedcba"], expected: "" },
  { input: ["aaabbbacd"], expected: "acd" },
];

import test from "./Test.js";
test(candyCrush, testCases);
