// Copying, merging, and freezing objects

let originalUser = {
  name: "Aman",
  role: "QA",
  address: {
    city: "Delhi"
  }
};

// Reference copy
let referenceUser = originalUser;
referenceUser.role = "Senior QA";

console.log(originalUser.role); // Senior QA

// Shallow copy using spread
let userCopy = { ...originalUser };
userCopy.name = "Ravi";

console.log(originalUser.name); // Aman
console.log(userCopy.name); // Ravi

// Shallow copy does not deeply copy nested objects.
userCopy.address.city = "Mumbai";
console.log(originalUser.address.city); // Mumbai

// Deep copy for simple JSON-safe data
let deepCopyUser = JSON.parse(JSON.stringify(originalUser));
deepCopyUser.address.city = "Pune";

console.log(originalUser.address.city); // Mumbai
console.log(deepCopyUser.address.city); // Pune

// Merge objects
let defaultConfig = {
  browser: "chrome",
  headless: true,
  timeout: 30000
};

let localConfig = {
  headless: false,
  retries: 2
};

let finalConfig = { ...defaultConfig, ...localConfig };
console.log(finalConfig);

// Freeze object
let environment = Object.freeze({
  baseUrl: "https://example.com",
  name: "QA"
});

environment.name = "Prod";
console.log(environment.name); // QA

// Interview point:
// Object spread creates a shallow copy.
// Nested objects still share references unless you deep copy them.
