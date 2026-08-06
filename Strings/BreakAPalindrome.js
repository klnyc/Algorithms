const breakAPalindrome = (palindrome) => {
  if (palindrome.length === 1) return "";

  let array = palindrome.split("");
  let midpoint = Math.floor(array.length / 2);

  for (let i = 0; i < midpoint; i++) {
    if (array[i] !== "a") {
      array[i] = "a";
      return array.join("");
    }
  }

  // cases where every letter is an "a"
  array[array.length - 1] = "b";
  return array.join("");
};

const testCases = [
  { input: ["abccba"], expected: "aaccba" },
  { input: ["a"], expected: "" },
  { input: ["aa"], expected: "ab" },
  { input: ["aba"], expected: "abb" },
  { input: ["aaaaa"], expected: "aaaab" },
  { input: ["bab"], expected: "aab" },
  { input: ["aza"], expected: "azb" },
  { input: ["acca"], expected: "aaca" },
  { input: ["aabaa"], expected: "aabab" },
  { input: ["zzzzz"], expected: "azzzz" },
];

import test from "../Test.js";
test(breakAPalindrome, testCases);
