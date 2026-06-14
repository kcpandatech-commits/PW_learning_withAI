// Interview questions and patterns for 2D arrays

// Q1. Print diagonal elements.
function printDiagonal(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}

// Q2. Find maximum value.
function findMax(matrix) {
  let max = matrix[0][0];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > max) {
        max = matrix[row][col];
      }
    }
  }

  return max;
}

// Q3. Print right triangle pattern.
function rightTrianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line = line + "* ";
    }

    console.log(line);
  }
}

// Q4. Validate all test cells have values.
function hasNoEmptyCell(table) {
  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      if (table[row][col] === "" || table[row][col] === null || table[row][col] === undefined) {
        return false;
      }
    }
  }

  return true;
}

let numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

printDiagonal(numbers);
console.log(findMax(numbers));
rightTrianglePattern(5);
console.log(hasNoEmptyCell(numbers));

// Important interview topics:
// 1. Accessing values using row and column index.
// 2. Nested loop traversal.
// 3. Row wise and column wise operations.
// 4. Searching inside a matrix.
// 5. Transpose of matrix.
// 6. Test data table handling for automation.
