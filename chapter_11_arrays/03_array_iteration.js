// Array iteration

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let number of numbers) {
  console.log(number);
}

numbers.forEach(function (number, index) {
  console.log(index, number);
});

// forEach does not return a new array.
let result = numbers.forEach(function (number) {
  return number * 2;
});

console.log(result); // undefined

