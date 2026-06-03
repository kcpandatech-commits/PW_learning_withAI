// Function expression
// A function can be stored inside a variable.
// Function expressions are not hoisted like function declarations.

const greetUser = function () {
  console.log("Hello from function expression");
};

greetUser();

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));

// Named function expression
// Useful because the function has a name in stack traces and recursion.

const factorial = function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * fact(n - 1);
};

console.log(factorial(5));

