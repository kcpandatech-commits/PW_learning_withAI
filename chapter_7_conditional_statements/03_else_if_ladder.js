// else if ladder
// Use else if when checking multiple related conditions.

let percentage = 82;

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 75) {
  console.log("Grade B");
} else if (percentage >= 60) {
  console.log("Grade C");
} else if (percentage >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

// Important:
// Conditions are checked from top to bottom.
// Once one condition is true, the rest are skipped.

let speed = 95;

if (speed > 120) {
  console.log("Heavy fine");
} else if (speed > 80) {
  console.log("Normal fine");
} else {
  console.log("No fine");
}

