const generateParenthesis = (num) => {
  let result = [];

  const validate = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      string[i] === "(" ? count++ : count--;
      if (count < 0) return false;
    }
    return count === 0;
  };

  const permutate = (parentheses = "()", string = "", memo = {}) => {
    if (memo[string]) return;
    // base case for when the string is done permutating
    // for example, 3 pairs of parentheses will have a length of 6
    if (string.length === num * 2) {
      if (validate(string)) {
        result.push(string);
      }
      memo[string] = true;
    } else {
      for (let i = 0; i < parentheses.length; i++) {
        // if the string is empty, don't add a closing parentheses to it
        // strings cannot start with a closing parentheses
        if (string.length === 0 && parentheses[i] === ")") break;
        permutate(parentheses, string + parentheses[i], memo);
      }
    }
  };

  permutate();
  return result;
};

const testCases = [
  {
    input: [1],
    expected: ["()"],
  },
  {
    input: [2],
    expected: ["(())", "()()"],
  },
  {
    input: [3],
    expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
  },
  {
    input: [4],
    expected: [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ],
  },
];

import test from "../Test.js";
test(generateParenthesis, testCases);
