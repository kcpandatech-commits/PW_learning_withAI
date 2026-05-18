// Comparison operators in JavaScript
// Return a boolean value: true or false.

let a = 10;
let b = 20;

// 1. Greater than
console.log(a > b); // false

// 2. Less than
console.log(a < b); // true

// 3. Greater than or equal
console.log(a >= 10); // true

// 4. Less than or equal
console.log(b <= 20); // true

// 5. Equality with type conversion
console.log(10 == '10'); // true

// 6. Strict equality without type conversion
console.log(10 === '10'); // false

// 7. Not equal
console.log(10 != '10'); // false

// 8. Strict not equal
console.log(10 !== '10'); // true

// 9. String comparison is lexicographical.
console.log('apple' < 'banana'); // true
console.log('A' < 'a'); // true, uppercase has smaller Unicode value

// 10. Common surprise
console.log('2' > '12'); // true, string comparison character by character
console.log(Number('2') > Number('12')); // false

// 11. NaN comparison
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// Interview tip:
// Use === and !== in real projects.
// Use == only when you intentionally want JavaScript coercion.
