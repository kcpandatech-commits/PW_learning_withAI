// Object iteration and useful Object methods

let testResult = {
  testCaseId: "TC_LOGIN_001",
  status: "Passed",
  duration: 1200,
  browser: "Chrome"
};

// Get all keys
console.log(Object.keys(testResult));

// Get all values
console.log(Object.values(testResult));

// Get key-value pairs
console.log(Object.entries(testResult));

// Loop over object keys
for (let key of Object.keys(testResult)) {
  console.log(key, testResult[key]);
}

// Loop over entries
for (let [key, value] of Object.entries(testResult)) {
  console.log(`${key}: ${value}`);
}

// Convert entries back to object
let entries = [
  ["name", "Smoke Suite"],
  ["status", "Passed"]
];

let suite = Object.fromEntries(entries);
console.log(suite);

// Object.assign
let target = { browser: "chrome" };
let source = { headless: false, retries: 1 };

Object.assign(target, source);
console.log(target);

// Check own property
console.log(Object.hasOwn(testResult, "status"));

// Interview point:
// Object.keys, Object.values, and Object.entries are very common in interviews and automation code.
