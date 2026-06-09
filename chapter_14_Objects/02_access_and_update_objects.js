// Accessing and setting object properties

let employee = {
  name: "Priya",
  department: "Testing",
  "current project": "E-commerce Automation"
};

// Dot notation
console.log(employee.name);
console.log(employee.department);

// Bracket notation
console.log(employee["name"]);
console.log(employee["current project"]);

// Bracket notation is useful with dynamic keys.
let fieldName = "department";
console.log(employee[fieldName]);

// Update existing property
employee.department = "Automation Testing";
employee["current project"] = "Banking Automation";

console.log(employee);

// Add new property
employee.location = "Pune";
employee["isAvailable"] = true;

console.log(employee);

// Delete property
delete employee.isAvailable;
console.log(employee);

// Check if property exists
console.log("name" in employee);
console.log(employee.hasOwnProperty("location"));

// Optional chaining avoids error when nested property is missing.
let response = {
  status: 200,
  data: {
    user: {
      email: "tester@example.com"
    }
  }
};

console.log(response.data.user.email);
console.log(response.data.profile?.name); // undefined

// Interview point:
// Use dot notation for simple known keys.
// Use bracket notation for dynamic keys or keys with spaces/special characters.
