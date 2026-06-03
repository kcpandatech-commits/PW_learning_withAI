// Arrow functions
// Arrow functions provide a shorter syntax for writing functions.
// They do not have their own this, arguments, or super.

const greet = () => {
  console.log("Hello from arrow function");
};

greet();

const square = (num) => {
  return num * num;
};

console.log(square(5));

// Implicit return
// If there is only one expression, we can skip braces and return.

const cube = (num) => num * num * num;
console.log(cube(3));

// Returning an object directly requires parentheses.

const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Aman", 21));

// Interview point:
// Arrow functions are not good as object methods when you need this.

const student = {
  name: "Riya",
  normalFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name); // undefined in many environments
  },
};

student.normalFunction();
student.arrowFunction();

