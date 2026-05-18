// Tasks - Operators
// Date: 18 May

// 1. Maximum number between two numbers by using the ternary operator.

let num1 = 25;
let num2 = 40;

let maxBetweenTwo = num1 > num2 ? num1 : num2;

console.log('Maximum between two numbers:', maxBetweenTwo); // 40

// -------------------------------------------------

// 2. Maximum number between three numbers by using the ternary operator.

let a = 15;
let b = 45;
let c = 30;

let maxBetweenThree = a > b && a > c ? a : b > c ? b : c;

console.log('Maximum between three numbers:', maxBetweenThree); // 45

// More readable version using nested ternary with parentheses:
let maxBetweenThreeReadable = a > b
  ? (a > c ? a : c)
  : (b > c ? b : c);

console.log('Maximum between three numbers readable:', maxBetweenThreeReadable); // 45

// -------------------------------------------------

// 3. Find the output.
// let a = 5;
// console.log(a++ + ++a - --a + a-- + ++a);
// console.log(a);

let value = 5;

// Step-by-step:
// value++ returns 5, then value becomes 6
// ++value makes value 7, then returns 7
// --value makes value 6, then returns 6
// value-- returns 6, then value becomes 5
// ++value makes value 6, then returns 6
//
// Expression:
// 5 + 7 - 6 + 6 + 6 = 18

console.log(value++ + ++value - --value + value-- + ++value); // 18
console.log(value); // 6
