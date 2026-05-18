// Exponentiation operator (**)
// Used to calculate power.

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
console.log(10 ** 0); // 1

// 1. Same result using Math.pow()
console.log(Math.pow(2, 3)); // 8

// 2. Square and cube
let side = 4;
console.log(side ** 2); // 16, area of square
console.log(side ** 3); // 64, cube

// 3. Square root using fractional power
console.log(25 ** 0.5); // 5
console.log(64 ** (1 / 3)); // 3.9999999999999996 due to floating precision

// 4. Operator precedence
console.log(2 + 3 ** 2); // 11, exponent runs before addition
console.log((2 + 3) ** 2); // 25

// 5. Important syntax rule
// console.log(-2 ** 2); // SyntaxError
console.log(-(2 ** 2)); // -4
console.log((-2) ** 2); // 4

// 6. Assignment form
let value = 3;
value **= 2; // same as value = value ** 2
console.log(value); // 9

// Interview tip:
// ** is right-associative.
console.log(2 ** 3 ** 2); // 512, same as 2 ** (3 ** 2)
console.log((2 ** 3) ** 2); // 64
