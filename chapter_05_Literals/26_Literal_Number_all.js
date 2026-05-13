// All number types in JavaScript

// All numbers are 64-bit floating point (IEEE 754) under the hood

// 1. Integer
console.log(42);

// 2. Float / Decimal
console.log(3.14);

// 3. Scientific / Exponential
console.log(5e3);   // 5000
console.log(5e-3);  // 0.005

// 4. Binary (0b prefix)
console.log("Binary:"); 
console.log(0b1010); // 10
console.log(typeof 0b1010);

// 5. Octal (0o prefix - ES6)
console.log(0o77);   // 63

// 6. Hexadecimal (0x prefix)
console.log(0xFF);   // 255

// 7. BigInt (n suffix) - arbitrary precision integers
console.log(9007199254740991n);
console.log(BigInt("12345678901234567890"));

// 8. Special numeric values
console.log(Infinity);
console.log(-Infinity);
console.log(NaN); // Not a Number

// 9. Negative numbers
console.log(-10);
console.log(-3.14);

// 10. Separated digits (ES12 - _ as visual separator)
console.log(1_000_000); // 1000000
console.log(0xFF_FF);   // 65535
