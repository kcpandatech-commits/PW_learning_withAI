// Arithmetic operators in JavaScript
// Used to perform mathematical calculations.

let a = 20;
let b = 6;

// 1. Addition
console.log(a + b); // 26

// 2. Subtraction
console.log(a - b); // 14

// 3. Multiplication
console.log(a * b); // 120

// 4. Division
console.log(a / b); // 3.333...

// 5. Remainder / modulus
console.log(a % b); // 2

// 6. Exponentiation
console.log(2 ** 3); // 8

// 7. Increment
let count = 5;
count++;
console.log(count); // 6

// 8. Decrement
count--;
console.log(count); // 5

// 9. Unary plus converts values to number.
console.log(+'10'); // 10
console.log(+true); // 1
console.log(+false); // 0

// 10. Unary minus changes sign.
console.log(-a); // -20

// 11. Common interview behavior
console.log('10' + 5); // 105, + works as string concatenation
console.log('10' - 5); // 5, - converts string to number
console.log('10' * 2); // 20
console.log('10' / 2); // 5

// 12. Invalid arithmetic gives NaN.
console.log('hello' - 2); // NaN
console.log(Number.isNaN('hello' - 2)); // true

// Interview tip:
// + is special because it supports both addition and string concatenation.
// Other arithmetic operators usually try numeric conversion.
