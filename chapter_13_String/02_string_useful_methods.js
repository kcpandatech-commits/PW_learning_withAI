// Useful string methods

let message = "  JavaScript is powerful  ";

console.log(message.length);
console.log(message.trim()); // removes spaces from both sides
console.log(message.trimStart()); // removes spaces from start
console.log(message.trimEnd()); // removes spaces from end

let text = "Senior QA Engineer";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("QA")); // true
console.log(text.startsWith("Senior")); // true
console.log(text.endsWith("Engineer")); // true
console.log(text.indexOf("QA")); // 7
console.log(text.lastIndexOf("e"));

// slice(start, end) returns part of the string.
// end index is not included.
console.log(text.slice(0, 6)); // Senior
console.log(text.slice(7, 9)); // QA
console.log(text.slice(-8)); // Engineer

// replace changes first match. replaceAll changes all matches.
let bugReport = "bug found, bug fixed, bug verified";

console.log(bugReport.replace("bug", "defect"));
console.log(bugReport.replaceAll("bug", "defect"));

// split converts string to array.
// join converts array to string.
let csv = "login,checkout,payment,logout";
let testCases = csv.split(",");

console.log(testCases);
console.log(testCases.join(" | "));

// Interview point:
// Most string methods return a new string. Original string remains unchanged.

