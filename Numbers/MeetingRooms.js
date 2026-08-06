// Input: An array of meeting intervals [[start_i, end_i], ...].
// Output: True if no meetings overlap, False otherwise.

// sort intervals array by start times
// if the meeting's start time is before the previous meeting's end time,
// there is an overlap

const meetingRooms = (intervals) => {
  const sorted = intervals.sort((a, b) => a[0] < b[0]);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] < sorted[i - 1][1]) {
      return false;
    }
  }

  return true;
};

const testCases = [
  {
    input: [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
    ],
    expected: false,
  },
  {
    input: [
      [
        [0, 30],
        [30, 40],
        [50, 60],
      ],
    ],
    expected: true,
  },
];

import test from "../Test.js";
test(meetingRooms, testCases);
