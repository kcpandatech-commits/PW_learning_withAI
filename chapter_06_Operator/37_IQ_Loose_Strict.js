// Interview questions: loose vs strict equality

// Predict output before running.

console.log(0 == false); // true
console.log(0 === false); // false

console.log('' == false); // true
console.log('' === false); // false

console.log('0' == false); // true
console.log('0' === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false

// Explanation:
// Equality and relational comparison use different internal rules.
// null == 0 is false, but null >= 0 converts null to 0.

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
// undefined becomes NaN in numeric comparisons.

console.log([] == false); // true
console.log([] == ![]); // true
// ![] is false because [] is truthy, then [] == false is true after conversion.

console.log([1] == 1); // true
console.log([1, 2] == '1,2'); // true

// Objects compare by reference, not by content.
console.log([1, 2] === [1, 2]); // false

let a = [1, 2];
let b = a;
console.log(a === b); // true

// Interview speaking pattern:
// 1. Identify operator: == or ===
// 2. If ===, compare type first.
// 3. If ==, explain conversion.
// 4. For objects/arrays, remember reference comparison.
