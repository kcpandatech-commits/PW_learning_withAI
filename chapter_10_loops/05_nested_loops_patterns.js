// nested loops
// A loop inside another loop is called a nested loop.

for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`row ${row}, column ${col}`);
  }
}

// Pattern printing
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}

