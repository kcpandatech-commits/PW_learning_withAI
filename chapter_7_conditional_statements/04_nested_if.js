// nested if
// Use nested if when one condition depends on another condition.

let hasAccount = true;
let hasPassword = true;

if (hasAccount) {
  if (hasPassword) {
    console.log("Login allowed");
  } else {
    console.log("Password required");
  }
} else {
  console.log("Create an account first");
}

// Practical example

let balance = 5000;
let withdrawAmount = 1200;

if (withdrawAmount <= balance) {
  if (withdrawAmount % 100 === 0) {
    console.log("Transaction successful");
  } else {
    console.log("Amount should be multiple of 100");
  }
} else {
  console.log("Insufficient balance");
}

