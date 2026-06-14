// Common 2D array functions

function print2DArray(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row].join(" "));
  }
}

function searchValue(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        return { row: row, col: col };
      }
    }
  }

  return -1;
}

function countStatus(testResults, status) {
  let count = 0;

  for (let row = 0; row < testResults.length; row++) {
    for (let col = 0; col < testResults[row].length; col++) {
      if (testResults[row][col] === status) {
        count++;
      }
    }
  }

  return count;
}

function transpose(matrix) {
  let result = [];

  for (let col = 0; col < matrix[0].length; col++) {
    let rowData = [];

    for (let row = 0; row < matrix.length; row++) {
      rowData.push(matrix[row][col]);
    }

    result.push(rowData);
  }

  return result;
}

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

print2DArray(grid);
console.log(searchValue(grid, 5));
console.log(transpose(grid));

let results = [
  ["Pass", "Fail", "Pass"],
  ["Pass", "Pass", "Fail"]
];

console.log(countStatus(results, "Fail"));
