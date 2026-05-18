// Type operators in JavaScript
// typeof checks the type of a value.
// instanceof checks whether an object belongs to a constructor/class.

// 1. typeof basics
console.log(typeof 10); // number
console.log(typeof 'hello'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol('id')); // symbol
console.log(typeof 10n); // bigint

// 2. Function and object
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof []); // object

// Arrays are objects, so use Array.isArray().
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// 3. Famous interview question
console.log(typeof null); // object
// This is a long-standing JavaScript behavior.
// To check null:
let value = null;
console.log(value === null); // true

// 4. instanceof
let today = new Date();
console.log(today instanceof Date); // true
console.log(today instanceof Object); // true

let numbers = [1, 2, 3];
console.log(numbers instanceof Array); // true
console.log(numbers instanceof Object); // true

// 5. Custom class
class User {}
let user = new User();
console.log(user instanceof User); // true

// 6. Practical type checking
function printLength(input) {
  if (typeof input !== 'string') {
    return 'Please pass a string';
  }

  return input.length;
}

console.log(printLength('JavaScript')); // 10
console.log(printLength(100)); // Please pass a string

// Interview tip:
// typeof is best for primitives.
// Array.isArray() is best for arrays.
// value === null is best for null.
// instanceof is useful for class/object checks.
