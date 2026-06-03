// Loop interview questions

// Q1. Sum of numbers from 1 to n.
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum); // 55

// Q2. Reverse a number.
let original = 12345;
let reverse = 0;
let temp = original;

while (temp > 0) {
  let digit = temp % 10;
  reverse = reverse * 10 + digit;
  temp = Math.floor(temp / 10);
}

console.log(reverse); // 54321

// Q3. Check palindrome string.
let word = "madam";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(word === reversedWord); // true

// Q4. Count vowels.
let sentence = "javascript is powerful";
let vowels = "aeiou";
let vowelCount = 0;

for (let char of sentence) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log(vowelCount);

