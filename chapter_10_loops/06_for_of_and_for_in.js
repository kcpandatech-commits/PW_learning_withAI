// for...of and for...in

let fruits = ["apple", "banana", "mango"];

// for...of gives values from an iterable.
for (let fruit of fruits) {
  console.log(fruit);
}

let student = {
  name: "Aman",
  age: 21,
  course: "JavaScript",
};

// for...in gives keys from an object.
for (let key in student) {
  console.log(key, student[key]);
}

// Interview point:
// Use for...of for arrays when you need values.
// Use for...in for objects when you need keys.

