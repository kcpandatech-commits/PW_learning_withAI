// slice, splice, and sort

let numbers = [10, 20, 30, 40, 50];

// slice returns a shallow copy and does not change original array.
let selected = numbers.slice(1, 4);
console.log(selected); // [20, 30, 40]
console.log(numbers); // original unchanged

// splice changes the original array.
numbers.splice(2, 1, 35); // start at index 2, remove 1 item, add 35
console.log(numbers);

// sort converts values to strings by default.
let scores = [100, 25, 8, 60];
scores.sort();
console.log(scores); // [100, 25, 60, 8]

scores.sort(function (a, b) {
  return a - b;
});

console.log(scores); // numeric ascending

