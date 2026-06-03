// Function declaration
// A function is a reusable block of code.
// Function declarations are hoisted, so they can be called before they are written.

greet();

function greet() {
  console.log("Hello from function declaration");
}

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);

// Interview point:
// return sends a value back from the function.
// Code after return inside the same function will not run.

function testReturn() {
  return "Done";
  console.log("This will not print");
}

console.log(testReturn());

