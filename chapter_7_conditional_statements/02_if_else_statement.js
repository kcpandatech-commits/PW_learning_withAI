// if else statement
// Use if else when there are two possible paths.

let marks = 42;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let temperature = 38;

if (temperature > 37) {
  console.log("Fever");
} else {
  console.log("Normal temperature");
}

// Interview question:
// What will print here?

let value = 0;

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // This prints because 0 is falsy.
}

