// Array add and remove methods

let fruits = ["apple", "banana"];

fruits.push("mango"); // add at end
console.log(fruits);

fruits.pop(); // remove from end
console.log(fruits);

fruits.unshift("orange"); // add at start
console.log(fruits);

fruits.shift(); // remove from start
console.log(fruits);

// Interview point:
// push and pop are usually faster than shift and unshift because they work at the end.

