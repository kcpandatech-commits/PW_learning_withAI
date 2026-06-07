# String Exercises for Senior QA Engineer Interviews

Solve these questions in JavaScript. Focus on clean code, edge cases, readable function names, and testable logic.

## Basic String Logic

1. Reverse a string without using the built-in `reverse()` method.
2. Check whether a string is a palindrome.
3. Count vowels and consonants in a string.
4. Count uppercase letters, lowercase letters, digits, and special characters.
5. Find the first non-repeating character in a string.
6. Find the most repeated character in a string.
7. Remove duplicate characters from a string.
8. Replace multiple spaces with a single space.
9. Capitalize the first letter of every word.
10. Convert `hello_world_test` into `helloWorldTest`.

## Validation Questions

1. Validate an email address using a regular expression.
2. Validate a password with minimum length, uppercase, lowercase, number, and special character.
3. Validate a mobile number with exactly 10 digits.
4. Validate whether a string contains only alphabets.
5. Validate whether a string contains only numbers.
6. Validate whether a URL starts with `http://` or `https://`.
7. Validate a date string in `YYYY-MM-DD` format.
8. Validate a test case ID format like `TC_LOGIN_001`.
9. Validate a bug ID format like `BUG-2026-145`.
10. Validate that user input is not empty after trimming spaces.

## QA Automation Style Problems

1. Extract the order ID from `Your order ORD12345 has been shipped`.
2. Extract the OTP from `Your OTP is 456789. Do not share it.`
3. Extract all numbers from a log message.
4. Mask an email so `tester@example.com` becomes `t****r@example.com`.
5. Mask a phone number so only the last 4 digits are visible.
6. Compare two strings after trimming and ignoring case.
7. Convert a CSV string into an array of test case names.
8. Convert an array of failed test names into a comma-separated report line.
9. Parse `status=passed;duration=1200ms;browser=chrome` into an object.
10. From a URL query string, extract the value of `token`.

## Interview Coding Questions

1. Check if two strings are anagrams.
2. Find the longest word in a sentence.
3. Find the shortest word in a sentence.
4. Count the frequency of each word in a paragraph.
5. Find duplicate words in a sentence.
6. Reverse every word in a sentence but keep word order same.
7. Compress a string like `aaabbc` into `a3b2c1`.
8. Decompress a string like `a3b2c1` into `aaabbc`.
9. Check whether one string is a rotation of another string.
10. Find the longest common prefix from an array of strings.

## Senior QA Edge Case Thinking

For each solution, write test cases for:

1. Empty string.
2. String with only spaces.
3. String with leading and trailing spaces.
4. Mixed uppercase and lowercase input.
5. Numbers inside the string.
6. Special characters inside the string.
7. Very long string.
8. Unicode characters.
9. Null or undefined input, if your function is expected to handle it.
10. Already valid and already invalid input.

## Bonus Test Design Tasks

1. Write positive and negative test cases for email validation.
2. Write boundary value test cases for password length.
3. Write equivalence classes for phone number validation.
4. Create a small test data table for login username validation.
5. Write assertions for comparing expected and actual error messages after trimming extra spaces.

