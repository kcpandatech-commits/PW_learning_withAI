// Higher order functions
// A higher order function either:
// 1. accepts another function as an argument, or
// 2. returns a function.

function repeatTask(times, task) {
  for (let i = 1; i <= times; i++) {
    task(i);
  }
}

repeatTask(3, function (count) {
  console.log(`Running task ${count}`);
});

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(10));
console.log(triple(10));

// Interview point:
// map, filter, reduce, forEach, setTimeout are common higher order functions.

