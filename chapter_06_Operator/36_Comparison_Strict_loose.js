// Strict vs loose comparison
// == allows type conversion.
// === checks both value and type.

// 1. Number and string
console.log(5 == '5'); // true
console.log(5 === '5'); // false

// 2. Boolean and number
console.log(false == 0); // true
console.log(false === 0); // false

console.log(true == 1); // true
console.log(true === 1); // false

// 3. null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// 4. Empty string and zero
console.log('' == 0); // true
console.log('' === 0); // false

// 5. Empty array examples
console.log([] == 0); // true
console.log([] == ''); // true
console.log([] === 0); // false

// Why [] == 0?
// [] converts to '' and '' converts to 0.

// 6. Objects compare by reference
console.log({} === {}); // false
console.log([] === []); // false

let arr = [];
let sameArr = arr;
console.log(arr === sameArr); // true

// 7. Practical validation
let userInput = '0';

if (userInput === 0) {
  console.log('Number zero');
} else {
  console.log('Not number zero');
}

// Interview conclusion:
// === is predictable because it avoids implicit type conversion.
// == is not always bad, but it requires strong knowledge of coercion rules.
