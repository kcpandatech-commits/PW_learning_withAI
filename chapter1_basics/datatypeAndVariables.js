/**
 * ============================================
 * DATA TYPES & VARIABLES - INTERVIEW GUIDE
 * ============================================
 */

// ========================================
// 1. PRIMITIVE DATA TYPES
// ========================================
/*
Primitives are immutable data types stored directly in memory (stack).
There are 7 primitive data types in JavaScript.
*/

// 1.1 Number
console.log("\n1.1 Number:");
let num = 42;
let decimal = 3.14;
let negative = -5;
let infinity = Infinity;
let notANumber = NaN; // Not a Number
console.log(typeof num); // "number"
console.log(typeof infinity); // "number"
console.log(typeof NaN); // "number" (quirk)
console.log(isNaN(notANumber)); // true
console.log(Number.isNaN(NaN)); // true (better check)

// 1.2 String
console.log("\n1.2 String:");
let str1 = "hello";
let str2 = 'world';
let str3 = `template literal`;
let str4 = `interpolation: ${str1}`;
console.log(typeof str1); // "string"
console.log(str1 + " " + str2); // concatenation
console.log(str1.length); // 5 (strings are immutable)

// 1.3 Boolean
console.log("\n1.3 Boolean:");
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // "boolean"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

// 1.4 Undefined
console.log("\n1.4 Undefined:");
let undefinedVar;
console.log(undefinedVar); // undefined
console.log(typeof undefinedVar); // "undefined"
// Undefined: variable declared but not assigned

// 1.5 Null
console.log("\n1.5 Null:");
let nullVar = null;
console.log(nullVar); // null
console.log(typeof nullVar); // "object" (historical quirk)
// Null: intentional absence of value

// 1.6 Symbol
console.log("\n1.6 Symbol:");
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false (unique)
let obj = { [sym1]: "value" };
console.log(obj[sym1]); // "value"
// Symbols: unique, used as object keys

// 1.7 BigInt
console.log("\n1.7 BigInt:");
let bigNum = 12345678901234567890n;
let bigNum2 = BigInt("999999999999999999999");
console.log(typeof bigNum); // "bigint"
console.log(9007199254740992n === 9007199254740993n); // false
console.log(9007199254740992 === 9007199254740993); // true (Number limit)
// BigInt: numbers beyond Number.MAX_SAFE_INTEGER

// ========================================
// 2. VARIABLE DECLARATION: var vs let vs const
// ========================================

// 2.1 var - OLD WAY (avoid in modern JS)
console.log("\n2.1 var keyword:");
var x = 10;
var x = 20; // can redeclare
x = 30; // can reassign
console.log(x); // 30
console.log(window.x); // 30 (global scope - creates global property)

// var hoisting
console.log(hoistedVar); // undefined (not error!)
var hoistedVar = 5;
// Equivalent to:
// var hoistedVar;
// console.log(hoistedVar); // undefined
// hoistedVar = 5;

// var with function scope
function varScope() {
  if (true) {
    var y = 10;
  }
  console.log(y); // 10 (not block-scoped)
}
varScope();

// 2.2 let - BLOCK SCOPED (preferred)
console.log("\n2.2 let keyword:");
let a = 1;
// let a = 2; // Error: Identifier 'a' has already been declared
a = 2; // OK: reassignment allowed
console.log(a); // 2

// let with block scope
function letScope() {
  if (true) {
    let b = 10;
  }
  // console.log(b); // ReferenceError
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 (separate scope per iteration)
}

// 2.3 const - CONSTANT (preferred for non-changing values)
console.log("\n2.3 const keyword:");
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable
// const PI2; // Error: Missing initializer
console.log(PI);

// const with objects/arrays (reference constant, not value)
const obj = { name: "John" };
obj.name = "Jane"; // OK: modifying property
obj.age = 30; // OK: adding property
// obj = {}; // Error: reassignment not allowed
console.log(obj); // { name: "Jane", age: 30 }

const arr = [1, 2, 3];
arr.push(4); // OK: modifying array
console.log(arr); // [1, 2, 3, 4]
// arr = []; // Error: reassignment not allowed

// ========================================
// 3. TEMPORAL DEAD ZONE (TDZ)
// ========================================
console.log("\n3. Temporal Dead Zone:");
// console.log(tempVar); // ReferenceError: Cannot access 'tempVar' before initialization
// Zone from start of block to initialization is "TDZ"
let tempVar = 10;
console.log(tempVar); // 10

// var doesn't have TDZ
console.log(varTemporal); // undefined (hoisted, not in TDZ)
var varTemporal = 5;

// ========================================
// 4. TYPE COERCION
// ========================================

// 4.1 Implicit Type Coercion
console.log("\n4.1 Implicit Type Coercion:");

// String coercion
console.log(1 + "2"); // "12" (number + string = string)
console.log("hello" + true); // "hellotrue"
console.log("5" - 2); // 3 (string coerced to number with -)
console.log("5" * "2"); // 10 (* operator coerces both)
console.log("5" / "2"); // 2.5

// Boolean coercion
console.log(true + 1); // 2 (true → 1)
console.log(false + 1); // 1 (false → 0)
if ("hello") {
  console.log("truthy string"); // executes
}
if ("") {
  console.log("falsy string"); // doesn't execute
}

// Comparison coercion
console.log(5 == "5"); // true (loose equality with coercion)
console.log(5 === "5"); // false (strict equality, no coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false); // true
console.log(0 === false); // false

// Falsy values in JavaScript
console.log("\nFalsy Values:");
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach((val) => console.log(`${val} is falsy`));

// Truthy values (everything else)
console.log("\nTruthy Examples:");
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true (string "0" is truthy!)
console.log(Boolean([])); // true (array is truthy!)
console.log(Boolean({})); // true (object is truthy!)

// 4.2 Explicit Type Coercion (Type Casting)
console.log("\n4.2 Explicit Type Coercion:");

// To String
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log((123).toString()); // "123"

// To Number
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(parseInt("42px")); // 42 (parses until non-digit)
console.log(parseFloat("3.14abc")); // 3.14
console.log(+"42"); // 42 (unary + operator)

// To Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(!!"hello"); // true (double negation)

// 4.3 Comparison Operators & Coercion
console.log("\n4.3 Comparison with Coercion:");
console.log("2" > "12"); // true (string comparison: "2" > "1")
console.log(2 > "12"); // false (numeric comparison: 2 > 12)
console.log("2" > 1); // true (1 coerced to "1", then compared as strings)

// 4.4 Truthiness in Boolean Context
console.log("\n4.4 Boolean Context:");
const value = "hello";
if (value) {
  console.log("value is truthy");
}

const count = 0;
if (!count) {
  console.log("count is falsy");
}

const user = null;
console.log(user || "Anonymous"); // "Anonymous" (logical OR)
console.log(user && "logged in"); // null (logical AND)

// ========================================
// 5. NaN (Special Case)
// ========================================
console.log("\n5. NaN (Not a Number):");
console.log(NaN === NaN); // false (NaN is not equal to itself!)
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (coerces "hello" to NaN)
console.log(Number.isNaN(NaN)); // true (no coercion)
console.log(Number.isNaN("hello")); // false (strict check)

// ========================================
// 6. HOISTING SUMMARY
// ========================================
console.log("\n6. Hoisting Summary:");

// var: hoisted with undefined initialization
console.log(hoistVar1); // undefined
var hoistVar1 = 10;

// let/const: hoisted but not initialized (TDZ)
// console.log(hoistVar2); // ReferenceError
let hoistVar2 = 20;

// Functions: completely hoisted (can call before declaration)
console.log(hoistedFunction()); // "I'm hoisted!"

function hoistedFunction() {
  return "I'm hoisted!";
}

// Function expressions: NOT hoisted
// console.log(hoistedExpression()); // ReferenceError
const hoistedExpression = () => "Not hoisted";

// ========================================
// 7. OBJECT & ARRAY (Reference Types)
// ========================================
console.log("\n7. Reference Types:");

// Objects are reference types (stored on heap)
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (both reference same object)

let obj3 = { name: "Alice" };
console.log(obj1 === obj3); // false (different objects in memory)
console.log(obj1 == obj3); // false (different references)

// Copying objects
let obj4 = { ...obj1 }; // shallow copy
let obj5 = Object.assign({}, obj1); // shallow copy
console.log(obj4.name); // "Bob"
console.log(obj4 === obj1); // false

// ========================================
// 8. TYPEOF OPERATOR
// ========================================
console.log("\n8. typeof Operator:");
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 42n); // "bigint"
console.log(typeof { name: "John" }); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are objects)
console.log(typeof null); // "object" (quirk!)
console.log(typeof (() => {})); // "function"

// ========================================
// 9. STRICT EQUALITY vs LOOSE EQUALITY
// ========================================
console.log("\n9. Equality Comparison:");
console.log(0 == false); // true (coercion)
console.log(0 === false); // false (strict)

console.log("" == 0); // true (coercion)
console.log("" === 0); // false (strict)

console.log(null == undefined); // true
console.log(null === undefined); // false

// Always use === for comparison
const best = 5;
if (best === 5) {
  console.log("Prefer === always!");
}

// ========================================
// 10. COMMON INTERVIEW SCENARIOS
// ========================================
console.log("\n10. Interview Scenarios:");

// Scenario 1: What's the output?
(function scenario1() {
  console.log("\nScenario 1: Hoisting");
  console.log(a); // undefined (hoisted var)
  var a = 5;
  console.log(a); // 5
})();

// Scenario 2: Closure with var
(function scenario2() {
  console.log("\nScenario 2: Closure with var");
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
  }
  funcs[0](); // 3 (all reference same i)
  funcs[1](); // 3
})();

// Scenario 3: Closure with let
(function scenario3() {
  console.log("\nScenario 3: Closure with let");
  var funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
  }
  funcs[0](); // 0 (each has separate i)
  funcs[1](); // 1
})();

// Scenario 4: Type coercion
(function scenario4() {
  console.log("\nScenario 4: Type Coercion");
  console.log([1, 2] + [3, 4]); // "1,23,4" (both converted to strings)
  console.log([] + {}); // "[object Object]"
  console.log({} + []); // "[object Object]" (statement context)
})();

// Scenario 5: Reference vs Value
(function scenario5() {
  console.log("\nScenario 5: Reference vs Value");
  let primitive = 5;
  let primitiveCopy = primitive;
  primitiveCopy = 10;
  console.log(primitive); // 5 (unchanged)

  let obj = { value: 5 };
  let objCopy = obj;
  objCopy.value = 10;
  console.log(obj.value); // 10 (changed, same reference)
})();

console.log("\n========================================");
console.log("KEY TAKEAWAYS FOR INTERVIEWS:");
console.log("========================================");
console.log("1. 7 Primitive types: number, string, boolean, undefined, null, symbol, bigint");
console.log("2. let/const (block-scoped) > var (function-scoped)");
console.log("3. const by default, let when reassignment needed, avoid var");
console.log("4. === (strict) > == (loose with coercion)");
console.log("5. Understand hoisting: var (undefined), let/const (TDZ)");
console.log("6. Primitives: passed by value | Objects: passed by reference");
console.log("7. Falsy: false, 0, '', null, undefined, NaN, -0, 0n");
console.log("8. All other values are truthy");
console.log("========================================");
