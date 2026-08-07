const greatestCommonDivisorOfStrings = (string1, string2) => {
  const shorter = string1.length < string2.length ? string1 : string2;
  const longer = string2.length > string1.length ? string2 : string1;

  for (let i = shorter.length; i >= 0; i--) {
    const substring = shorter.slice(0, i);
    if (
      // substring must be a common divisor of both string inputs
      shorter.split(substring).join("").length === 0 &&
      longer.split(substring).join("").length === 0
    )
      return substring;
  }

  return "";
};

const testCases = [
  { input: ["ABCABC", "ABC"], expected: "ABC" },
  { input: ["ABABAB", "ABAB"], expected: "AB" },
  { input: ["LEET", "CODE"], expected: "" },
  { input: ["AAAA", "AA"], expected: "AA" },
  { input: ["ABCDEF", "ABC"], expected: "" },
  { input: ["ABAB", "ABAB"], expected: "ABAB" },
  { input: ["AAAAAAAAA", "AAAAAA"], expected: "AAA" },
  {
    input: [
      "TAUXXTAUXXTAUXXTAUXXTAUXX",
      "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX",
    ],
    expected: "TAUXX",
  },
  { input: ["A", "A"], expected: "A" },
  { input: ["ABABABA", "AB"], expected: "" },
];

import test from "../Test.js";
test(greatestCommonDivisorOfStrings, testCases);
