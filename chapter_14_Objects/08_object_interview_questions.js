// Object interview questions with sample solutions

// Q1. Count frequency of values in an array.
function countFrequency(items) {
  let frequency = {};

  for (let item of items) {
    frequency[item] = (frequency[item] || 0) + 1;
  }

  return frequency;
}

console.log(countFrequency(["passed", "failed", "passed", "skipped"]));

// Q2. Find duplicate values using an object.
function findDuplicates(items) {
  let frequency = countFrequency(items);
  let duplicates = [];

  for (let key in frequency) {
    if (frequency[key] > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

console.log(findDuplicates(["login", "cart", "login", "payment"]));

// Q3. Convert array of objects into a lookup object.
function createUserLookup(users) {
  let lookup = {};

  for (let user of users) {
    lookup[user.id] = user;
  }

  return lookup;
}

console.log(createUserLookup([
  { id: 1, name: "Aman" },
  { id: 2, name: "Priya" }
]));

// Q4. Compare two objects shallowly.
function shallowEqual(first, second) {
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (let key of firstKeys) {
    if (first[key] !== second[key]) {
      return false;
    }
  }

  return true;
}

console.log(shallowEqual({ status: 200 }, { status: 200 })); // true
console.log(shallowEqual({ status: 200 }, { status: 201 })); // false

// Q5. Remove properties with null or undefined values.
function removeEmptyValues(obj) {
  let cleaned = {};

  for (let [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      cleaned[key] = value;
    }
  }

  return cleaned;
}

console.log(removeEmptyValues({ name: "Aman", age: null, role: undefined, active: true }));

// Q6. Group test cases by status.
function groupByStatus(testCases) {
  let grouped = {};

  for (let testCase of testCases) {
    let status = testCase.status;

    if (!grouped[status]) {
      grouped[status] = [];
    }

    grouped[status].push(testCase);
  }

  return grouped;
}

console.log(groupByStatus([
  { id: "TC_001", status: "Passed" },
  { id: "TC_002", status: "Failed" },
  { id: "TC_003", status: "Passed" }
]));
