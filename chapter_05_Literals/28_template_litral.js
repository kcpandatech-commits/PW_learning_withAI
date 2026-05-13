// Template literals (backticks) - ES6

// 1. String interpolation
let name = 'Alice';
let age = 30;
console.log(`Name: ${name}, Age: ${age}`);
// → Name: Alice, Age: 30  (variables are injected into the string)

// 2. Multi-line strings
let msg = `This is line one
This is line two
This is line three`;
console.log(msg);
// → This is line one
//   This is line two
//   This is line three  (preserves line breaks without \n)

// 3. Expression evaluation
let a = 10, b = 20;
console.log(`Sum: ${a + b}`);
// → Sum: 30  (evaluates the expression a + b inside ${})
console.log(`Random: ${Math.random()}`);
// → Random: 0.123456789  (any JS expression works, e.g. Math.random())

// 4. Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) =>
    `${acc}${str}${values[i] ? `**${values[i]}**` : ''}`, '');
}
let result = highlight`User ${name} is ${age} years old.`;
console.log(result); // User **Alice** is **30** years old.

// 5. Nested templates
let isLoggedIn = true;
console.log(`User is ${isLoggedIn ? `logged in as ${name}` : 'anonymous'}`);
// → User is logged in as Alice  (nested template inside ternary)

// -------------------------------------------------
// Real-life SDET example: dynamic test report
// -------------------------------------------------
let testName = 'Login Test';
let status = 'PASS';
let duration = 1.2;
let timestamp = new Date().toISOString();
let errorMsg = null;

let testReport = `
  Test Report
  ─────────────────────
  Test     : ${testName}
  Status   : ${status === 'PASS' ? '✅ PASS' : '❌ FAIL'}
  Duration : ${duration}s
  Time     : ${timestamp}
  ${errorMsg ? `Error    : ${errorMsg}` : 'Errors   : None'}
  ─────────────────────
`;
console.log(testReport);
// →
//   Test Report
//   ─────────────────────
//   Test     : Login Test
//   Status   : ✅ PASS
//   Duration : 1.2s
//   Time     : 2026-05-13T12:00:00.000Z
//   Errors   : None
//   ─────────────────────
// (dynamic report with conditional emoji based on pass/fail)
