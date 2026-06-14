// Returning values from callbacks

function processData(data, callback) {
  return callback(data);
}

let numbers = [10, 20, 30, 40];

let total = processData(numbers, function (items) {
  let sum = 0;

  for (let item of items) {
    sum = sum + item;
  }

  return sum;
});

let passedTests = processData([
  { name: "Login", status: "Passed" },
  { name: "Checkout", status: "Failed" },
  { name: "Search", status: "Passed" }
], function (tests) {
  return tests.filter(function (test) {
    return test.status === "Passed";
  });
});

console.log(total);
console.log(passedTests);

// Interview questions:
// 1. What is a callback function?
// 2. Why do we pass function reference without parentheses?
// 3. Difference between synchronous and asynchronous callbacks.
// 4. What is callback hell?
// 5. How can callback hell be solved?
// 6. Which JavaScript array methods use callbacks?
