// Object basics
// An object stores data in key-value pairs.
// Objects are useful when one thing has many related details.

let user = {
  name: "Aman",
  role: "QA Engineer",
  experience: 3,
  isActive: true
};

console.log(user);
console.log(user.name);
console.log(user.role);

// Object values can be any data type.
let testCase = {
  id: "TC_LOGIN_001",
  title: "Verify valid login",
  priority: "High",
  steps: ["Open login page", "Enter valid credentials", "Click login"],
  expectedResult: "User should land on dashboard"
};

console.log(testCase.steps);
console.log(testCase.expectedResult);

// Empty object
let bug = {};

bug.id = "BUG-101";
bug.status = "Open";
bug.severity = "Critical";

console.log(bug);

// Interview point:
// Arrays are best for ordered lists.
// Objects are best for representing one entity with named properties.
