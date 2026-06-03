// Callback functions
// A callback is a function passed as an argument to another function.
// Callbacks help us reuse logic and handle async operations.

function calculator(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subtract));

// Callback with array method
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

// Interview point:
// Passing add means passing the function reference.
// Passing add() means calling the function immediately.

