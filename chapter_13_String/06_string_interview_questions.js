// String interview questions with sample solutions

// Q1. Reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("testing"));

// Q2. Check palindrome.
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replaceAll(" ", "");
  return cleaned === reverseString(cleaned);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Q3. Count vowels.
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Automation Testing"));

// Q4. Find first non-repeating character.
function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("swiss")); // w

// Q5. Count words in a sentence.
function countWords(sentence) {
  let words = sentence.trim().split(/\s+/);
  return sentence.trim() === "" ? 0 : words.length;
}

console.log(countWords("  JavaScript is useful for QA  "));

// Q6. Check anagram.
function normalize(str) {
  return str.toLowerCase().split("").sort().join("");
}

function isAnagram(first, second) {
  return normalize(first) === normalize(second);
}

console.log(isAnagram("listen", "silent")); // true

