// String useful functions cheat sheet

let str = "  JavaScript Testing  ";

// Length
console.log(str.length);

// Access characters
console.log(str[2]);
console.log(str.charAt(2));

// Case conversion
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Remove extra spaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Check content
console.log(str.includes("Script"));
console.log(str.startsWith("  Java"));
console.log(str.endsWith("  "));

// Find index
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("i"));

// Extract part
console.log(str.slice(2, 12));
console.log(str.substring(2, 12));

// Replace text
console.log(str.replace("Testing", "Automation"));
console.log("qa qa qa".replaceAll("qa", "QA"));

// Convert string to array
console.log("smoke,regression,sanity".split(","));

// Convert array to string
console.log(["smoke", "regression", "sanity"].join(" -> "));

// Repeat and pad
console.log("JS".repeat(3));
console.log("7".padStart(3, "0")); // 007
console.log("7".padEnd(3, "0")); // 700

// Regex test
console.log(/^[A-Z]/.test("JavaScript")); // starts with capital letter

// Interview quick notes:
// 1. Strings are immutable.
// 2. length is a property, not a function.
// 3. slice supports negative indexes.
// 4. substring does not support negative indexes like slice.
// 5. includes returns true or false.
// 6. indexOf returns -1 when text is not found.
// 7. split returns an array.
// 8. trim is very useful before validating user input.

