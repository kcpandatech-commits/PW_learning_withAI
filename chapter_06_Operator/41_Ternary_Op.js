// Ternary operator in JavaScript
// condition ? valueIfTrue : valueIfFalse

let age = 20;

// 1. Basic ternary
let result = age >= 18 ? 'Adult' : 'Minor';
console.log(result); // Adult

// 2. Same logic with if/else
if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

// 3. Use ternary for simple value selection
let isLoggedIn = true;
let message = isLoggedIn ? 'Welcome back' : 'Please login';
console.log(message); // Welcome back

// 4. Ternary inside template literal
let status = 'PASS';
console.log(`Test result: ${status === 'PASS' ? 'Successful' : 'Failed'}`);

// 5. Nested ternary
let marks = 82;
let grade = marks >= 90 ? 'A' : marks >= 75 ? 'B' : marks >= 60 ? 'C' : 'D';
console.log(grade); // B

// Nested ternary can become hard to read.
// For complex conditions, prefer if/else or a function.

// 6. Practical example
let cartTotal = 1200;
let deliveryCharge = cartTotal >= 999 ? 0 : 99;
console.log(deliveryCharge); // 0

// 7. Interview tip
// Ternary is an expression, so it returns a value.
// if/else is a statement, so it controls flow.

let canVote = age >= 18 ? true : false;
console.log(canVote); // true

// Cleaner:
let canVoteClean = age >= 18;
console.log(canVoteClean); // true
