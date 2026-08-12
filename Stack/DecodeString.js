// create a stack
// loop through string, push each character in
// if it's a "]", build the substring starting from the back, using stack.pop()
// while last item in stack is not "[", temp = stack.pop() + temp
// stack.pop the "["
// get the number, while last item in the stack is a number, build the number
// repeat the substring
// push entire substring back into the stack, letter by letter

const decodeString = (string) => {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char !== "]") {
      // push everything that's not a closing bracket into the stack
      stack.push(char);
    } else {
      // if it's a closing bracket, build the substring starting from the last letter
      let substring = "";
      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }

      // remove the "["
      stack.pop();

      // build the number
      let number = "";
      while (
        stack[stack.length - 1] &&
        !isNaN(Number(stack[stack.length - 1]))
      ) {
        number = stack.pop() + number;
      }

      // repeat the substring by the number and place it back onto the stack
      number = Number(number);
      substring = substring.repeat(number).split("");
      stack = [...stack, ...substring];
    }
  }

  return stack.join("");
};

const testCases = [
  { input: ["3[a]2[bc]"], expected: "aaabcbc" },
  { input: ["3[a2[c]]"], expected: "accaccacc" },
  { input: ["2[abc]3[cd]ef"], expected: "abcabccdcdcdef" },
  { input: ["10[a]"], expected: "aaaaaaaaaa" },
  { input: ["2[2[2[a]]]"], expected: "aaaaaaaa" },
  { input: ["leetcode"], expected: "leetcode" },
  { input: ["1[a]"], expected: "a" },
  { input: ["2[a]2[b2[c]]"], expected: "aabccbcc" },
  { input: ["a2[b]c3[d]e"], expected: "abbcddde" },
  { input: ["12[a2[b]]"], expected: "abbabbabbabbabbabbabbabbabbabbabbabb" },
];

import test from "../Test.js";
test(decodeString, testCases);
