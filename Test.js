const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const test = (callback, testCases) => {
  let passedTests = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = callback(...input); // input is an array of arguments
    const passed = isEqual(result, expected);
    const status = passed ? "✅ PASS" : "❌ FAIL";
    if (passed) passedTests++;

    console.log(
      `Test ${index + 1} ${status}: 
      | Input: ${JSON.stringify(input).slice(1, -1)} 
      | Expected: ${JSON.stringify(expected)} 
      | Result: ${JSON.stringify(result)}`,
    );
  });

  console.log(`${passedTests}/${testCases.length} tests passed!`);
};

export default test;

// To run the tests in each file, run `node` + `${filename}`
