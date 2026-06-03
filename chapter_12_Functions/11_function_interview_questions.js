// Function interview questions

// Q1. Function declaration vs function expression
sayHello(); // Works because function declaration is hoisted.

function sayHello() {
  console.log("Hello");
}

// sayHi(); // Error if uncommented, because const variable is not initialized yet.
const sayHi = function () {
  console.log("Hi");
};

sayHi();

// Q2. What is first-class function?
// In JavaScript, functions are first-class values.
// They can be stored in variables, passed as arguments, and returned from functions.

function execute(fn) {
  fn();
}

execute(function () {
  console.log("Function passed as value");
});

// Q3. Difference between parameters and arguments?
function demo(parameter) {
  console.log(parameter);
}

demo("argument");

// Q4. Rest vs spread
function sumAll(...nums) {
  return nums.reduce(function (total, num) {
    return total + num;
  }, 0);
}

let values = [1, 2, 3];
console.log(sumAll(...values));

// Rest collects values. Spread expands values.

// Q5. Why can arrow function be problematic with this?
const person = {
  name: "Aman",
  normal: function () {
    return this.name;
  },
  arrow: () => {
    return this.name;
  },
};

console.log(person.normal()); // Aman
console.log(person.arrow()); // undefined in many environments

