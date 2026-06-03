// Default parameters
// Default parameters are used when an argument is missing or undefined.

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet("Aman");
greet();

function calculateBill(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.05));

// Interview point:
// null does not trigger default parameter. Only undefined or missing value does.

function testDefault(value = "default value") {
  console.log(value);
}

testDefault(undefined); // default value
testDefault(null); // null

