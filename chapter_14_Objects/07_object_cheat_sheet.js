// Object useful functions cheat sheet

let user = {
  name: "Aman",
  role: "QA Engineer",
  experience: 3,
  skills: ["JavaScript", "Playwright"]
};

// Create object
console.log(user);

// Access properties
console.log(user.name);
console.log(user["role"]);

// Add and update properties
user.city = "Pune";
user.experience = 4;
console.log(user);

// Delete property
delete user.city;
console.log(user);

// Check property
console.log("role" in user);
console.log(Object.hasOwn(user, "skills"));

// Object keys, values, entries
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Destructuring
let { name, role } = user;
console.log(name, role);

// Rename and default value
let { experience: years, company = "NA" } = user;
console.log(years, company);

// Spread copy and merge
let userCopy = { ...user };
let updatedUser = { ...user, role: "Senior QA Engineer" };

console.log(userCopy);
console.log(updatedUser);

// Object method
let testRun = {
  passed: 18,
  failed: 2,
  total: 20,
  getFailedPercentage() {
    return (this.failed / this.total) * 100;
  }
};

console.log(testRun.getFailedPercentage());

// Convert object to JSON string
let jsonText = JSON.stringify(user);
console.log(jsonText);

// Convert JSON string to object
let parsedUser = JSON.parse(jsonText);
console.log(parsedUser);

// Interview quick notes:
// 1. Objects store key-value pairs.
// 2. Dot notation is used for known simple keys.
// 3. Bracket notation is used for dynamic keys.
// 4. Object spread creates a shallow copy.
// 5. this inside a regular method points to the calling object.
// 6. Arrow functions do not have their own this.
// 7. Destructuring extracts properties into variables.
// 8. JSON.stringify converts object to string.
// 9. JSON.parse converts JSON string to object.
// 10. Object.keys, Object.values, and Object.entries help with iteration.
