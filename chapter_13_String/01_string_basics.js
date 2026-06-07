// String basics
// A string is a sequence of characters.
// Strings can be written with single quotes, double quotes, or backticks.

let firstName = "Aman";
let lastName = 'Sharma';
let fullName = `${firstName} ${lastName}`;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// Strings are indexed from 0.
let language = "JavaScript";

console.log(language[0]); // J
console.log(language[4]); // S
console.log(language.length); // 10

// Strings are immutable.
// This means we cannot directly change one character of an existing string.

let word = "Hello";
word[0] = "Y";

console.log(word); // Hello

// To change a string, create a new string.
let changedWord = "Y" + word.slice(1);
console.log(changedWord); // Yello

// Interview point:
// String primitives like "hello" are not objects, but JavaScript temporarily
// wraps them so we can use methods like toUpperCase() and slice().

