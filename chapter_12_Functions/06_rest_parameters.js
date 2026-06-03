// Rest parameters
// Rest parameters collect remaining arguments into an array.
// Syntax: ...parameterName

function addAll(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(addAll(1, 2, 3));
console.log(addAll(10, 20, 30, 40));

function createProfile(name, age, ...skills) {
  return {
    name: name,
    age: age,
    skills: skills,
  };
}

console.log(createProfile("Aman", 21, "HTML", "CSS", "JS"));

// Interview point:
// Rest parameter must be the last parameter.

