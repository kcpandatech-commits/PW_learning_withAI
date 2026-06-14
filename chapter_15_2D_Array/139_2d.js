// Creating and reading 2D arrays

let marks = [
  [80, 75, 90],
  [65, 88, 72],
  [95, 91, 89]
];

console.log(marks.length); // rows
console.log(marks[0].length); // columns in first row

// Print all values using nested loops.
for (let row = 0; row < marks.length; row++) {
  for (let col = 0; col < marks[row].length; col++) {
    console.log(`marks[${row}][${col}] = ${marks[row][col]}`);
  }
}

// Find row wise total.
for (let row = 0; row < marks.length; row++) {
  let total = 0;

  for (let col = 0; col < marks[row].length; col++) {
    total = total + marks[row][col];
  }

  console.log(`Student ${row + 1} total = ${total}`);
}

// SDET use case:
// Each row can represent one test case and each column can represent test data.
