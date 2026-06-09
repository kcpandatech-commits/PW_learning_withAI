# Object Exercises for Senior QA Engineer Interviews

Solve these questions in JavaScript. Focus on clean object structure, safe property access, reusable functions, and edge cases.

## Object Basics

1. Create an object for a user with name, email, role, and active status.
2. Create an object for a test case with id, title, priority, steps, and expected result.
3. Access object properties using dot notation.
4. Access object properties using bracket notation.
5. Add a new property to an existing object.
6. Update an existing property in an object.
7. Delete a property from an object.
8. Check whether a property exists using `in`.
9. Check whether a property exists using `Object.hasOwn()`.
10. Create an object with a key that contains spaces and access it.

## Accessing And Setting Objects

1. Write a function that accepts an object and returns the value of a dynamic key.
2. Write a function that updates the status of a bug object.
3. Write a function that adds execution time to a test result object.
4. Write a function that safely reads a nested email from an API response.
5. Write a function that returns `"NA"` if a nested property is missing.
6. Convert a test case object into a JSON string.
7. Convert a JSON string into an object.
8. Create a config object and override one value.
9. Write a function that removes a property from an object.
10. Write a function that validates required keys in an object.

## Destructuring Practice

1. Destructure name and role from a user object.
2. Destructure id and status from a bug object.
3. Rename `email` to `userEmail` while destructuring.
4. Use a default value while destructuring a missing city property.
5. Destructure nested user details from an API response.
6. Destructure browser and timeout from a config object.
7. Destructure function parameters in a function that prints bug summary.
8. Destructure first-level and nested-level values from the same object.
9. Use rest syntax to collect remaining properties.
10. Explain when destructuring improves readability.

## Object Methods And `this`

1. Create an object method that returns full name.
2. Create an object method that returns bug summary.
3. Create an object method that calculates pass percentage.
4. Create an object method that updates status.
5. Explain what `this` means inside a regular object method.
6. Show why arrow functions are not preferred as object methods.
7. Create a test suite object with addTest and getTotalTests methods.
8. Create a cart object with addItem and getTotalPrice methods.
9. Create a user object with login and logout methods.
10. Explain method shorthand syntax.

## Object Iteration

1. Print all keys of an object.
2. Print all values of an object.
3. Print all key-value pairs of an object.
4. Convert object entries into a new object.
5. Count how many properties an object has.
6. Loop through a test result object and print report lines.
7. Find all keys whose values are empty strings.
8. Find all boolean properties in an object.
9. Convert object values into a comma-separated string.
10. Convert an array of key-value pairs into an object.

## Copy, Merge, And Immutability

1. Demonstrate reference copy behavior with an object.
2. Create a shallow copy using spread syntax.
3. Create a shallow copy using `Object.assign()`.
4. Merge default config and environment config.
5. Show that nested objects still share reference after shallow copy.
6. Deep copy a simple JSON-safe object.
7. Freeze a config object using `Object.freeze()`.
8. Explain shallow copy vs deep copy.
9. Update an object immutably using spread syntax.
10. Remove a property immutably using destructuring.

## QA Automation Style Problems

1. Parse `status=passed;duration=1200ms;browser=chrome` into an object.
2. Convert `{ status: "passed", browser: "chrome" }` into a report string.
3. Count passed, failed, and skipped test cases from an array of objects.
4. Group test cases by status.
5. Group bugs by severity.
6. Find the test case with the highest duration.
7. Find all failed test cases from an array of test result objects.
8. Validate an API response has status, data, and message keys.
9. Mask email inside a user object without changing the original object.
10. Merge common test config with browser-specific config.

## Interview Coding Questions

1. Count frequency of characters in a string using an object.
2. Count frequency of words in a sentence using an object.
3. Find duplicate values in an array using an object.
4. Convert an array of users into an object lookup by id.
5. Convert an object lookup back into an array.
6. Write a shallow object comparison function.
7. Remove all `null` and `undefined` values from an object.
8. Find the key with the highest numeric value.
9. Invert object keys and values.
10. Flatten a nested object one level deep.
11. Deep clone a JSON-safe object.
12. Compare two API response objects for selected keys only.
13. Create a function that picks only allowed keys from an object.
14. Create a function that omits blocked keys from an object.
15. Explain why `{}` === `{}` returns `false`.

## Senior QA Edge Case Thinking

For each solution, write test cases for:

1. Empty object.
2. Object with missing optional properties.
3. Object with missing required properties.
4. Object with nested properties.
5. Object with `null` values.
6. Object with `undefined` values.
7. Object with empty string values.
8. Object with array values.
9. Object with boolean values.
10. Object with unexpected extra properties.

## Bonus Test Design Tasks

1. Write positive and negative test cases for API response object validation.
2. Create a test data table for user profile object validation.
3. Write boundary tests for numeric values inside an object.
4. Create assertions for checking nested response data safely.
5. Write test cases for merging environment configuration objects.
