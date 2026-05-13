// null vs undefined

// undefined - variable declared but not assigned a value
let a;
console.log(a); // undefined

// null - intentional absence of any object value
let b = null;
console.log(b); // null

// Key differences:
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)

console.log(undefined == null);  // true  (loose equality)
console.log(undefined === null); // false (strict equality)

// Summary:
// undefined → JS says "I haven't given this a value yet"
// null      → You say "I want this to have no value"
