const { type } = require("express/lib/response");

let a = 'asdf';
let b = 1234;
let c = true;
let d = null;
let e = undefined;

console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // object (this is a known quirk in JavaScript, null is considered an object)
console.log(typeof e); // undefined 