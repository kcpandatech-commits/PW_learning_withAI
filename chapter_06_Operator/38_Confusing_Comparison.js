// Confusing comparisons in JavaScript
// These are common interview and debugging cases.

// 1. null comparisons
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// 2. undefined comparisons
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// undefined converts to NaN in numeric comparison.
// Any comparison with NaN is false.

// 3. NaN is not equal to itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// 4. String comparison
console.log('11' < '2'); // true
// Character by character: '1' comes before '2'.

console.log('11' < 2); // false
// Here '11' converts to number 11.

// 5. Chained comparison problem
console.log(1 < 2 < 3); // true
// 1 < 2 gives true, true converts to 1, then 1 < 3 is true.

console.log(3 > 2 > 1); // false
// 3 > 2 gives true, true converts to 1, then 1 > 1 is false.

// Correct way:
let n = 2;
console.log(1 < n && n < 3); // true

// 6. Object and primitive comparison
console.log([5] == 5); // true
console.log([5] === 5); // false

// Best practice:
// Avoid writing code that depends on confusing coercion.
// Convert explicitly using Number(), String(), or Boolean().
