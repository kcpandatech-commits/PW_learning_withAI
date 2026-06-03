// IIFE and pure functions

// IIFE means Immediately Invoked Function Expression.
// It runs immediately after it is created.

(function () {
  let message = "This runs immediately";
  console.log(message);
})();

// Pure function
// A pure function gives the same output for the same input
// and does not change outside data.

function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3));

// Impure function
// This changes external state, so it is impure.

let total = 0;

function impureAdd(value) {
  total += value;
  return total;
}

console.log(impureAdd(5));
console.log(impureAdd(5));

