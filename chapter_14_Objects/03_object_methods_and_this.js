// Object methods and this
// A function inside an object is called a method.

let user = {
  firstName: "Aman",
  lastName: "Sharma",
  role: "QA Engineer",

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getProfile: function () {
    return `${this.getFullName()} works as ${this.role}`;
  }
};

console.log(user.getFullName());
console.log(user.getProfile());

// Short method syntax
let testRun = {
  total: 10,
  passed: 8,
  failed: 2,

  getPassPercentage() {
    return (this.passed / this.total) * 100;
  }
};

console.log(testRun.getPassPercentage());

// Be careful with arrow functions as object methods.
let bug = {
  id: "BUG-101",
  status: "Open",
  getStatus: () => {
    return this.status;
  }
};

console.log(bug.getStatus()); // undefined in most normal cases

// Interview point:
// Regular methods get this from the object that calls them.
// Arrow functions do not have their own this.
