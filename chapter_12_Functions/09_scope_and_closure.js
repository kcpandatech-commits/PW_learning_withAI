// Scope and closure
// Scope decides where a variable can be accessed.
// Closure happens when an inner function remembers variables from its outer function.

let globalMessage = "Global variable";

function outerFunction() {
  let outerMessage = "Outer variable";

  function innerFunction() {
    console.log(globalMessage);
    console.log(outerMessage);
  }

  innerFunction();
}

outerFunction();

// Closure example

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Interview point:
// count is still remembered even after createCounter has finished running.

