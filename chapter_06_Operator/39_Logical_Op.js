// Logical operators in JavaScript
// Used for combining conditions and controlling default values.

let isLoggedIn = true;
let isAdmin = false;

// 1. AND (&&)
console.log(isLoggedIn && isAdmin); // false
// true only when both sides are true.

// 2. OR (||)
console.log(isLoggedIn || isAdmin); // true
// true when at least one side is true.

// 3. NOT (!)
console.log(!isLoggedIn); // false
console.log(!!'hello'); // true, converts value to boolean

// 4. Short-circuit behavior
console.log(false && 'This will not be returned'); // false
console.log(true || 'This will not be returned'); // true

// 5. Logical operators return actual values, not always booleans.
console.log('JavaScript' && 100); // 100
console.log('' && 100); // ''
console.log('JavaScript' || 100); // JavaScript
console.log('' || 100); // 100

// 6. Default value with ||
let username = '';
console.log(username || 'Guest'); // Guest
// Problem: '' is treated as falsy.

// 7. Nullish coalescing (??)
console.log(username ?? 'Guest'); // ''
// ?? only uses default for null or undefined.

let apiValue = null;
console.log(apiValue ?? 'No data'); // No data

// 8. Practical condition
let age = 22;
let hasId = true;

if (age >= 18 && hasId) {
  console.log('Allowed');
}

// Interview tip:
// && returns first falsy value or last truthy value.
// || returns first truthy value or last falsy value.
// ?? returns right side only for null or undefined.
