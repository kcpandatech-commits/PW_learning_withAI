// Useful array search methods

let students = [
  { name: "Aman", marks: 78 },
  { name: "Riya", marks: 92 },
  { name: "Kabir", marks: 35 },
];

let topper = students.find(function (student) {
  return student.marks > 90;
});

console.log(topper);

let hasFailedStudent = students.some(function (student) {
  return student.marks < 40;
});

console.log(hasFailedStudent);

let allPassed = students.every(function (student) {
  return student.marks >= 40;
});

console.log(allPassed);

let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true

