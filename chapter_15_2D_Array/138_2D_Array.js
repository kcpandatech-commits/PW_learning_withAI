// Chapter 15: 2D Arrays
// A 2D array is an array where each item is also an array.
// It is useful for tables, grids, test data, reports, and matrix problems.

let testMatrix = [
  ["TC_001", "Login", "Chrome", "Pass"],
  ["TC_002", "Checkout", "Firefox", "Fail"],
  ["TC_003", "Payment", "Edge", "Pass"]
];

console.log(testMatrix);
console.log(testMatrix[0]); // first row
console.log(testMatrix[0][1]); // Login
console.log(testMatrix[1][3]); // Fail

// Updating a value
testMatrix[1][3] = "Pass";
console.log(testMatrix[1]);

// Adding a new row
testMatrix.push(["TC_004", "Logout", "Chrome", "Pass"]);
console.log(testMatrix);

// Interview point:
// arr[row][column] is the most common way to access values in a 2D array.
