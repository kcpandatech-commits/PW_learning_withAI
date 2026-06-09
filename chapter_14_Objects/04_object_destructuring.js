// Object destructuring
// Destructuring extracts object properties into variables.

let user = {
  name: "Priya",
  role: "QA Automation Engineer",
  city: "Bengaluru",
  experience: 4
};

let { name, role } = user;

console.log(name);
console.log(role);

// Rename variables while destructuring
let { city: userCity, experience: totalExperience } = user;

console.log(userCity);
console.log(totalExperience);

// Default values
let { company = "Not Assigned" } = user;
console.log(company);

// Nested destructuring
let apiResponse = {
  status: 200,
  data: {
    userId: 101,
    profile: {
      email: "tester@example.com",
      isVerified: true
    }
  }
};

let {
  data: {
    profile: { email, isVerified }
  }
} = apiResponse;

console.log(email);
console.log(isVerified);

// Destructuring in function parameters
function printBugSummary({ id, severity, status }) {
  console.log(`${id} is ${severity} and currently ${status}`);
}

let bug = {
  id: "BUG-2026-145",
  severity: "High",
  status: "Open"
};

printBugSummary(bug);

// Interview point:
// Destructuring makes code cleaner when you need specific properties from an object.
