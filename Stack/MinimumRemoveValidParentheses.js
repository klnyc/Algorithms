const minimumRemoveValidParentheses = (string) => {
  // loop string
  // const open stack, close stack
  // if char === (, push index in open
  // if char === ), pop open last item
  // if no open last item, push index into close stack
  // loop through open and close stacks, change the string indices to "", then rebuild string

  const open = [];
  const close = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === "(") {
      open.push(i);
    } else if (char === ")") {
      // if last item in open stack exists
      if (open[open.length - 1] !== undefined) {
        // valid match
        open.pop();
      } else {
        // no item in open stack, keep track of this index to remove later
        close.push(i);
      }
    }
  }

  const array = string.split("");

  // remove remaining invalid open parenthesis
  for (let i = 0; i < open.length; i++) {
    array[open[i]] = "";
  }

  // remove remaining invalid close parenthesis
  for (let i = 0; i < close.length; i++) {
    array[close[i]] = "";
  }

  // rebuild string
  return array.join("");
};

const testCases = [
  { input: ["lee(t(c)o)de)"], expected: "lee(t(c)o)de" },
  { input: ["a)b(c)d"], expected: "ab(c)d" },
  { input: ["))(("], expected: "" },
  { input: ["(a(b(c)d)"], expected: "a(b(c)d)" },
  { input: ["a(b)c"], expected: "a(b)c" },
  { input: ["abcdef"], expected: "abcdef" },
  { input: ["((())"], expected: "(())" },
  { input: [")("], expected: "" },
  { input: ["(((a)b)c)"], expected: "(((a)b)c)" },
];

import test from "../Test.js";
test(minimumRemoveValidParentheses, testCases);
