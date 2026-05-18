// Operators in JavaScript
// Operators are symbols or keywords used to perform operations on values.

// 1. Operand + operator
let x = 10;
let y = 3;

console.log(x + y); // 13
// x and y are operands, + is the operator.

// 2. Arithmetic operators
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...

// 3. Assignment operators
let score = 50;
score += 10; // same as score = score + 10
console.log(score); // 60

// 4. Comparison operators
console.log(10 > 5); // true
console.log(10 === '10'); // false

// 5. Logical operators
let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn && hasPermission); // false
console.log(isLoggedIn || hasPermission); // true
console.log(!isLoggedIn); // false

// 6. String operator
console.log('Hello' + ' JavaScript'); // Hello JavaScript

// 7. Type operator
console.log(typeof 100); // number
console.log(typeof 'JS'); // string

// 8. Interview note: operators can behave differently based on type.
console.log(5 + 5); // 10, numeric addition
console.log('5' + 5); // 55, string concatenation
console.log('5' - 2); // 3, numeric conversion

// Rule of thumb:
// - Use === instead of == for predictable comparison.
// - Understand type conversion before answering operator questions.
// - Parentheses improve readability when many operators are used together.
