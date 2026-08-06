// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Create a mapping between opening and closing brackets
// Create a stack and visited map, loop through the string
// Track the last item in the stack, and check if it equals to the current bracket
// If yes, pop the last item in the stack
// If no, add the current bracket's closing bracket
// If the stack is empty, return true

const isValidParenthesis = (string) => {
  const stack = []; // stack of closing brackets
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    const lastItem = stack[stack.length - 1];

    if (lastItem !== undefined && lastItem === bracket) {
      stack.pop();
    } else {
      stack.push(map[bracket]); // push it's closing counterpart into the stack
    }
  }

  return stack.length === 0; // stack is empty means all brackets are matched and popped
};

const testCases = [
  { input: ["()"], expected: true },
  { input: ["()[]{}"], expected: true },
  { input: ["(]"], expected: false },
  { input: ["([)]"], expected: false },
  { input: ["{[]}"], expected: true },
  { input: ["(("], expected: false },
  { input: [""], expected: true },
];

import test from "./Test.js";
test(isValidParenthesis, testCases);
