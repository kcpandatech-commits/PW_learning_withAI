// Callback functions with named and anonymous functions

function runTest(testName, callback) {
  console.log("Running test: " + testName);
  callback();
  console.log("Completed test: " + testName);
}

function loginSteps() {
  console.log("Open browser");
  console.log("Enter username");
  console.log("Enter password");
  console.log("Click login");
}

runTest("Login Test", loginSteps);

runTest("Logout Test", function () {
  console.log("Click profile menu");
  console.log("Click logout");
});

runTest("Search Test", () => {
  console.log("Enter search text");
  console.log("Validate search results");
});
