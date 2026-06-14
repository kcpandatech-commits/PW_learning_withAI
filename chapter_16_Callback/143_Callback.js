// Chapter 16: Callbacks
// A callback is a function passed as an argument to another function.

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreeting() {
  console.log("Welcome to JavaScript callbacks");
}

greetUser("Aman", afterGreeting);

// SDET use case:
// A test runner can run one function, then call another function after completion.
