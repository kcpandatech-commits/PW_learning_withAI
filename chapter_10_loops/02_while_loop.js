// while loop
// Use while when the number of iterations may not be known in advance.

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Example: keep doubling until value crosses 100.
let value = 2;

while (value <= 100) {
  console.log(value);
  value *= 2;
}

// Important:
// Always update the loop variable, otherwise the loop may become infinite.

