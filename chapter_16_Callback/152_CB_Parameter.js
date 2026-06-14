// Callback with parameters

function getTestResult(testName, callback) {
  let status = testName === "Login Test" ? "Passed" : "Failed";
  callback(testName, status);
}

function printResult(name, status) {
  console.log(`${name}: ${status}`);
}

getTestResult("Login Test", printResult);
getTestResult("Payment Test", printResult);

function filterTests(testCases, condition) {
  let result = [];

  for (let testCase of testCases) {
    if (condition(testCase)) {
      result.push(testCase);
    }
  }

  return result;
}

let tests = [
  { name: "Login", priority: "High" },
  { name: "Search", priority: "Low" },
  { name: "Payment", priority: "High" }
];

let highPriorityTests = filterTests(tests, function (testCase) {
  return testCase.priority === "High";
});

console.log(highPriorityTests);
