// Conditional statements interview questions

// Q1. Difference between == and === in conditions?
console.log(5 == "5"); // true, value comparison after type conversion
console.log(5 === "5"); // false, value and type both checked

// Q2. Print the greatest of three numbers.
let a = 12;
let b = 25;
let c = 18;

if (a >= b && a >= c) {
  console.log("a is greatest");
} else if (b >= a && b >= c) {
  console.log("b is greatest");
} else {
  console.log("c is greatest");
}

// Q3. Check even or odd.
let num = 17;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q4. Check leap year.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Q5. Avoid assignment inside condition by mistake.
let isPaid = false;

if (isPaid === true) {
  console.log("Course access allowed");
} else {
  console.log("Payment pending");
}

