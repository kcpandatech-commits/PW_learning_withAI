// JavaScript built-in methods that use callbacks

let testCases = [
  { id: "TC_001", name: "Login", status: "Passed" },
  { id: "TC_002", name: "Checkout", status: "Failed" },
  { id: "TC_003", name: "Payment", status: "Passed" }
];

testCases.forEach(function (testCase) {
  console.log(testCase.id + " - " + testCase.name);
});

let failedTests = testCases.filter(function (testCase) {
  return testCase.status === "Failed";
});

let testNames = testCases.map(function (testCase) {
  return testCase.name;
});

let allPassed = testCases.every(function (testCase) {
  return testCase.status === "Passed";
});

console.log(failedTests);
console.log(testNames);
console.log(allPassed);

// map, filter, forEach, find, some, every, and reduce all receive callbacks.
