// Interpolate coordinates on a graph. Find missing coordinates.
// Input:  [[0, 100], [5, 110],            [15, 130]                      , [30, 160]]
// Output: [[0, 100], [5, 110], [10, 120], [15, 130], [20, 140], [25, 150], [30, 160]]

// Take first and last coordinates and calculate the slope (rise/run = (y2 - y1) / (x2 - x1))
// slope = (y2 - y1) / step
// y2 = slope * step + y1
// x2 = x1 + step
// If step is not given, the step is the greatest common denominator of all the x values
// Place starting coords in results array
// While last x coordinate in results array !== last x coordinate in input
// calculate the next x, y coordinates and push into results using the last item in results

const interpolate = (coords, step = 5) => {
  if (!coords.length) return [];
  const results = [coords[0]];
  const [xlast, ylast] = coords[coords.length - 1];
  const [xfirst, yfirst] = coords[0];
  const slope = (ylast - yfirst) / (xlast - xfirst);

  while (results[results.length - 1][0] !== xlast) {
    const [x1, y1] = results[results.length - 1];
    const y2 = slope * step + y1;
    const x2 = x1 + step;
    results.push([x2, y2]);
  }

  return results;
};

const testCases = [
  {
    input: [
      [
        [0, 100],
        [5, 110],
        [15, 130],
        [30, 160],
      ],
    ],
    expected: [
      [0, 100],
      [5, 110],
      [10, 120],
      [15, 130],
      [20, 140],
      [25, 150],
      [30, 160],
    ],
  },
  {
    input: [
      [
        [0, 100],
        [30, 160],
      ],
    ],
    expected: [
      [0, 100],
      [5, 110],
      [10, 120],
      [15, 130],
      [20, 140],
      [25, 150],
      [30, 160],
    ],
  },
];

import test from "./Test.js";
test(interpolate, testCases);
