// Playwright style callback thinking
// This is a simple simulation, not real Playwright code.

function test(testName, callback) {
  console.log("START: " + testName);
  callback();
  console.log("END: " + testName);
}

let page = {
  goto: function (url) {
    console.log("Opening " + url);
  },
  click: function (selector) {
    console.log("Clicking " + selector);
  },
  fill: function (selector, value) {
    console.log("Filling " + selector + " with " + value);
  }
};

test("login test", function () {
  page.goto("https://example.com/login");
  page.fill("#username", "standard_user");
  page.fill("#password", "secret_sauce");
  page.click("#login-button");
});

// SDET point:
// Test frameworks often accept a callback that contains test steps.
