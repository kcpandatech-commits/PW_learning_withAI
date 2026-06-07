// String search and validation
// These patterns are useful in QA automation and interview questions.

let email = "tester@example.com";

console.log(email.includes("@"));
console.log(email.includes("."));

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

console.log(isValidEmail("tester@example.com")); // true
console.log(isValidEmail("testerexample.com")); // false

function isValidPassword(password) {
  let hasMinimumLength = password.length >= 8;
  let hasUppercase = /[A-Z]/.test(password);
  let hasLowercase = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  return hasMinimumLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}

console.log(isValidPassword("Test@123")); // true
console.log(isValidPassword("test123")); // false

function containsOnlyDigits(value) {
  return /^[0-9]+$/.test(value);
}

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("123a5")); // false

// Interview point:
// Regular expressions are powerful for validation, but they should be readable.
// For complex business rules, break validation into smaller checks.

