const sumTwoIntegersWithoutPlusMinus = (num1, num2) => {
  if (num1 === 0) return num2;
  if (num2 === 0) return num1;

  let smaller = Math.min(num1, num2);
  let larger = Math.max(num1, num2);

  if (smaller > 0 && larger > 0) {
    while (smaller > 0) {
      smaller--;
      larger++;
    }
    return larger;
  }

  if (smaller < 0 && larger < 0) {
    smaller *= -1;
    larger *= -1;
    while (smaller) {
      smaller--;
      larger++;
    }
    return larger * -1;
  }

  if (smaller < 0 && larger > 0) {
    while (larger > 0) {
      larger--;
      smaller++;
    }
    return smaller;
  }
};

const testCases = [
  { input: [11, 2], expected: 13 },
  { input: [-11, -22], expected: -33 },
  { input: [-8, -4], expected: -12 },
  { input: [-10, 2], expected: -8 },
  { input: [10, -20], expected: -10 },
  { input: [0, -2], expected: -2 },
];

import test from "../Test.js";
test(sumTwoIntegersWithoutPlusMinus, testCases);
