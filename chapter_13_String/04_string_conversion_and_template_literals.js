// String conversion and template literals

let amount = 2500;
let amountAsString = String(amount);

console.log(amountAsString);
console.log(typeof amountAsString);

let priceText = "499";
let price = Number(priceText);

console.log(price);
console.log(typeof price);

// Template literals use backticks.
// They support variable interpolation and multi-line strings.

let userName = "Riya";
let orderId = "ORD123";
let status = "delivered";

let notification = `Hello ${userName},
Your order ${orderId} has been ${status}.`;

console.log(notification);

// Practical QA example: create dynamic test description.

function createTestTitle(feature, scenario, expectedResult) {
  return `[${feature}] ${scenario} should ${expectedResult}`;
}

console.log(createTestTitle("Login", "valid user", "reach dashboard"));

// Interview point:
// Number("123") gives 123.
// Number("123abc") gives NaN.
// String(null) gives "null", String(undefined) gives "undefined".

