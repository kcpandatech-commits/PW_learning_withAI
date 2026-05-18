// Modulus / remainder operator (%)
// Returns the remainder after division.

console.log(10 % 3); // 1
console.log(20 % 5); // 0
console.log(7 % 2); // 1

// 1. Check even or odd
let num = 14;
if (num % 2 === 0) {
  console.log('Even number');
} else {
  console.log('Odd number');
}

// 2. Check divisibility
let marks = 75;
console.log(marks % 5 === 0); // true

// 3. Cycle through values
// Useful for sliders, carousels, pagination, and rotating turns.
let currentIndex = 0;
let totalItems = 4;

currentIndex = (currentIndex + 1) % totalItems;
console.log(currentIndex); // 1

currentIndex = (currentIndex + 1) % totalItems;
console.log(currentIndex); // 2

// 4. Interview behavior with negative numbers
console.log(7 % 3); // 1
console.log(-7 % 3); // -1
console.log(7 % -3); // 1

// JavaScript % is a remainder operator, not a true mathematical modulo.
// The sign follows the left operand.

// 5. Convert negative remainder to positive modulo
function mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

console.log(mod(-7, 3)); // 2

// Real-life example: run logic on every 3rd test case
for (let testNo = 1; testNo <= 10; testNo++) {
  if (testNo % 3 === 0) {
    console.log(`Run cleanup after test ${testNo}`);
  }
}
