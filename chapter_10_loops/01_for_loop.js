// for loop
// Use for loop when the number of iterations is known.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Print table of 5
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Interview point:
// let has block scope, so i is not available outside the loop.

