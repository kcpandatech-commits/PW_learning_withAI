// map, filter, reduce

let numbers = [1, 2, 3, 4, 5];

// map creates a new array by transforming every element.
let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

// filter creates a new array with elements that pass a condition.
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

// reduce converts an array into one final value.
let total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(total);

// Interview point:
// map returns same length array.
// filter returns same or smaller length array.
// reduce returns any single final value.

