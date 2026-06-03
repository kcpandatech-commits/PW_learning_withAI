// Parameterized functions
// Parameters are variables listed in function definition.
// Arguments are actual values passed while calling the function.

function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age} years old`);
}

introduce("Aman", 21);
introduce("Riya", 22);

function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

let interest = calculateSimpleInterest(10000, 8, 2);
console.log(interest);

// Interview point:
// If fewer arguments are passed, missing parameters become undefined.

function showValues(a, b) {
  console.log(a, b);
}

showValues(10); // 10 undefined

