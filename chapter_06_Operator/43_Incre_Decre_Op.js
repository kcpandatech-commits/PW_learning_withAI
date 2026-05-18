// Increment and decrement operators
// ++ increases by 1.
// -- decreases by 1.

// 1. Post-increment
let a = 5;
console.log(a++); // 5, returns old value
console.log(a); // 6

// 2. Pre-increment
let b = 5;
console.log(++b); // 6, increases first then returns new value
console.log(b); // 6

// 3. Post-decrement
let c = 5;
console.log(c--); // 5
console.log(c); // 4

// 4. Pre-decrement
let d = 5;
console.log(--d); // 4
console.log(d); // 4

// 5. Used in loops
for (let i = 1; i <= 3; i++) {
  console.log(`Round ${i}`);
}

// 6. Interview expression
let x = 10;
let y = x++ + ++x;
// x++ returns 10, x becomes 11
// ++x makes x 12 and returns 12
console.log(y); // 22
console.log(x); // 12

// 7. Works with numeric strings due to conversion
let count = '5';
count++;
console.log(count); // 6
console.log(typeof count); // number

// 8. Invalid numeric conversion
let text = 'hello';
text++;
console.log(text); // NaN

// Best practice:
// Use ++ and -- clearly in simple cases, especially loops.
// Avoid complex expressions like a++ + ++a in production code.
