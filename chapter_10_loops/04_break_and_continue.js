// break and continue
// break stops the loop.
// continue skips the current iteration and moves to the next one.

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }

  console.log(i); // 1 to 5
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i); // odd numbers only
}

// Practical example: find first passing mark.
let marks = [25, 32, 39, 45, 70];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    console.log("First passing mark:", marks[i]);
    break;
  }
}

