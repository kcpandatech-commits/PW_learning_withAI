// Basic callback example

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

// Interview point:
// We pass add and multiply without parentheses because we pass function reference.
