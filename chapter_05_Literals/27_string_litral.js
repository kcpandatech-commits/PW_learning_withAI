// String literals in JavaScript

// 1. Single quotes
let s1 = 'Hello';

// 2. Double quotes
let s2 = "World";

// 3. Template literals (backticks - ES6)
let name = 'John';
let s3 = `Hello ${name}`; // interpolation

// 4. Multi-line strings
let multiline = `Line one
Line two
Line three`;
// 5. Escape sequences
console.log('It\'s done');   // \' single quote
console.log("He said \"hi\""); // \" double quote
console.log('Line1\nLine2'); // \n newline
console.log('Tab\there');    // \t tab
console.log('Back\\slash');  // \\ backslash

// 6. String length
console.log('Hello'.length); // 5

// 7. Accessing characters
console.log('Hello'[0]);     // H
console.log('Hello'.charAt(0)); // H

// 8. String concatenation
let s4 = 'Hello' + ' ' + 'World';

// 9. Unicode
console.log('\u00A9');  // ©
console.log('\u{1F600}'); // 😀 (ES6)

// 10. Raw string (String.raw)
console.log(String.raw`Hello\nWorld`); // prints literal \n not newline

// -------------------------------------------------
// Difference between '', "", and `` in JS
// -------------------------------------------------
// ''  → Single quotes     — basic string, no interpolation
// ""  → Double quotes     — basic string, no interpolation
// ``  → Template literals — supports interpolation ${}, multi-line
//
//        ''                    ""                    ``
// ─────────────────────────────────────────────────────────
// Same?  ✅ identical           ✅ identical           ❌ different
// Interpolation? ❌ no         ❌ no                ✅ yes ${}
// Multi-line?    ❌ no         ❌ no                ✅ yes
// Escape \' ?    ✅ yes        ❌ not needed         ❌ not needed
// Escape \" ?    ❌ not needed  ✅ yes               ❌ not needed
//
// Rule of thumb:
//   - Use '' as default (simple, least visual noise)
//   - Use "" when your string contains ' (e.g. "it's")
//   - Use `` when you need interpolation or multi-line
//
// ```` (triple backticks) are Markdown code fences, NOT valid JS syntax.
