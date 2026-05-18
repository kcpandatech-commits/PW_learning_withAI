// Operator interview questions and behavior practice

// 1. Addition vs concatenation
console.log(1 + 2 + '3'); // 33
// 1 + 2 = 3, then 3 + '3' becomes '33'

console.log('1' + 2 + 3); // 123
// '1' + 2 becomes '12', then '12' + 3 becomes '123'

// 2. Numeric conversion with -, *, /
console.log('10' - 2); // 8
console.log('10' * '2'); // 20
console.log('10' / '2'); // 5

// 3. Boolean conversion in arithmetic
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + false); // 0

// 4. null and undefined
console.log(null + 1); // 1, null converts to 0
console.log(undefined + 1); // NaN

// 5. Comparison surprises
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 6. Empty array/object behavior
console.log([] + []); // '', both arrays convert to empty string
console.log([] + {}); // [object Object]
console.log({} + []); // 0 in some console contexts, parsing can differ

// Prefer testing object examples inside parentheses:
console.log(({} + [])); // [object Object]

// 7. Increment behavior
let a = 5;
console.log(a++); // 5, returns old value then increments
console.log(a); // 6

let b = 5;
console.log(++b); // 6, increments first then returns new value

// 8. Short-circuit result is not always boolean
console.log('JS' && 100); // 100
console.log('' || 'default'); // default

// Interview advice:
// Explain the conversion step, do not guess only by final output.
// Most tricky questions are about coercion, precedence, and truthy/falsy values.
