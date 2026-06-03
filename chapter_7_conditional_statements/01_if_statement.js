// if statement
// Use if when code should run only when a condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Show dashboard");
}

// Interview point:
// Values like false, 0, "", null, undefined, and NaN are falsy.
// All other values are truthy.

let userName = "";

if (userName) {
  console.log("Hello", userName);
}

