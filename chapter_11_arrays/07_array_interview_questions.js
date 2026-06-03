// Array interview questions

// Q1. Find maximum number.
let numbers = [10, 45, 2, 99, 32];
let max = numbers[0];

for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}

console.log(max);

// Q2. Remove duplicate values.
let values = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = [];

for (let value of values) {
  if (!uniqueValues.includes(value)) {
    uniqueValues.push(value);
  }
}

console.log(uniqueValues);

// Q3. Flatten one level array.
let nested = [1, [2, 3], [4, 5]];
let flat = nested.flat();
console.log(flat);

// Q4. Difference between shallow copy and reference.
let original = [1, 2, 3];
let referenceCopy = original;
let shallowCopy = [...original];

referenceCopy.push(4);
console.log(original); // changed

shallowCopy.push(5);
console.log(original); // not changed by shallowCopy

