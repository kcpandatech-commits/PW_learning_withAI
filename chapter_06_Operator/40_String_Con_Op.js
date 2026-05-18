// String concatenation operator (+)
// The + operator joins strings when at least one operand is a string.

let firstName = 'Rahul';
let lastName = 'Sharma';

// 1. Basic concatenation
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Rahul Sharma

// 2. String + number
console.log('Age: ' + 25); // Age: 25
console.log(10 + '20'); // 1020

// 3. Left-to-right behavior
console.log(10 + 20 + '30'); // 3030
console.log('10' + 20 + 30); // 102030

// 4. Convert intentionally
console.log(Number('10') + 20 + 30); // 60
console.log(String(10) + String(20)); // 1020

// 5. Template literal is often cleaner
let course = 'JavaScript';
let duration = 30;
console.log('Course: ' + course + ', Duration: ' + duration + ' days');
console.log(`Course: ${course}, Duration: ${duration} days`);

// 6. Concatenating arrays/objects
console.log('Items: ' + [1, 2, 3]); // Items: 1,2,3
console.log('User: ' + { name: 'Amit' }); // User: [object Object]

// Better:
console.log('User: ' + JSON.stringify({ name: 'Amit' })); // User: {"name":"Amit"}

// Interview note:
// + is evaluated left to right.
// If a string appears, later + operations usually become concatenation.
