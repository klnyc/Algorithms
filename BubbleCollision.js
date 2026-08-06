// There’s an array of numbers representing bubbles blown in a row.
// For each bubble, the absolute value represents its size,
// its sign represents its direction (positive meaning right, negative meaning left).
// Each bubble moves at the same speed and two bubbles moving the same direction will never meet.
// If two bubbles meet, the smaller one will explode. If both are the same size, both will explode.
// Find out the state of bubbles after all collisions.

// Create a stack, push first bubble in
// If array.length === 1 or 0, return array
// Loop starting from index 1
// If current bubble is negative (collisions only occur while moving to the left)
// Create a while loop, while the last bubble in the stack is positive (collision occurring),
// Get Math.abs(current bubble size), if its larger or equal than the last bubble, stack.pop()
// If bubbles are equal, end while loop
// If current bubble is smaller, do nothing
// After stack.pop(), if the next bubble is moving left, stack.push() new bubble
// Return stack

// const bubbleCollision = (bubbles) => {
//   if (bubbles.length === 0 || bubbles.length === 1) return bubbles;
//   const stack = [];
//   stack.push(bubbles[0]);

//   for (let i = 1; i < bubbles.length; i++) {
//     const current = bubbles[i];
//     const currentSize = Math.abs(current);
//     const currentDirection = current > 0 ? "right" : "left";

//     if (currentDirection === "left") {
//       // both bubbles are moving left
//       if (stack[stack.length - 1] < 0) {
//         stack.push(current);
//         continue;
//       }

//       while (
//         stack[stack.length - 1] > 0 &&
//         currentSize >= stack[stack.length - 1]
//       ) {
//         if (currentSize > stack[stack.length - 1]) {
//           stack.pop();
//         } else if (currentSize === stack[stack.length - 1]) {
//           stack.pop();
//           break;
//         }

//         // When the bubble moving left is done colliding and reaches another moving left bubble
//         if (stack[stack.length - 1] < 0 || !stack.length) {
//           stack.push(current);
//         }
//       }
//     } else {
//       stack.push(current);
//     }
//   }

//   return stack;
// };

const bubbleCollision = (bubbles) => {
  const stack = [];

  for (let i = 0; i < bubbles.length; i++) {
    let current = bubbles[i];
    let prev = stack[stack.length - 1];

    // if stack is empty, push current to stack
    if (!stack.length) {
      stack.push(current);
      continue;
    }

    // if prev and current is moving in the same direction
    if ((prev > 0 && current > 0) || (prev < 0 && current < 0)) {
      stack.push(current);
      continue;
    }

    // if prev is moving left and current moving right
    if (prev < 0 && current > 0) {
      stack.push(current);
      continue;
    }

    // if prev is moving right and current is moving left (collision!)
    if (prev > 0 && current < 0) {
      // if prev is larger than current
      if (prev > Math.abs(current)) {
        continue;
      }

      // if prev is smaller than current
      if (prev < Math.abs(current)) {
        while (stack.length && stack[stack.length - 1] < Math.abs(current)) {
          stack.pop();
        }

        if (stack.length && stack[stack.length - 1] > Math.abs(current)) {
          continue;
        } else {
          stack.push(current);
          continue;
        }
      }

      // if prev = current
      if (prev === Math.abs(current)) {
        stack.pop();
        continue;
      }
    }
  }

  return stack;
};

const testCases = [
  { input: [[10, 2, -5]], expected: [10] },
  { input: [[8, -8]], expected: [] },
  { input: [[-8]], expected: [-8] },
  { input: [[7, 6, 4, 3, 1]], expected: [7, 6, 4, 3, 1] },
  { input: [[10, -2, -3, -4]], expected: [10] },
  { input: [[2, 3, 4, -10]], expected: [-10] },
  { input: [[-8, 2, 3, 4, -10]], expected: [-8, -10] },
  { input: [[-8, 2, 3, 4, -10, -2]], expected: [-8, -10, -2] },
  { input: [[5, -5, 10, -10]], expected: [] },
  { input: [[-2, 10, -10, 2]], expected: [-2, 2] },
  { input: [[12, 5, -5, -12, 8]], expected: [8] },
  { input: [[-5, -6, -8, 8, 6, 5]], expected: [-5, -6, -8, 8, 6, 5] },
];

import test from "./Test.js";
test(bubbleCollision, testCases);
