// Nullish coalescing operator (??)
// Returns the right side only when the left side is null or undefined.

let name = null;
console.log(name ?? 'Guest'); // Guest

let city;
console.log(city ?? 'Unknown city'); // Unknown city

// 1. Difference between || and ??
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

console.log('' || 'default'); // default
console.log('' ?? 'default'); // ''

console.log(false || true); // true
console.log(false ?? true); // false

// || checks falsy values:
// false, 0, '', null, undefined, NaN
//
// ?? checks only:
// null, undefined

// 2. Practical example: user settings
let userVolume = 0;
let finalVolume = userVolume ?? 50;
console.log(finalVolume); // 0, user intentionally selected mute

// With || this would be wrong:
console.log(userVolume || 50); // 50

// 3. Optional chaining with ??
let user = {
  profile: {
    email: null
  }
};

console.log(user.profile.email ?? 'No email'); // No email
console.log(user.address?.city ?? 'No city'); // No city

// 4. Nullish assignment
let theme = null;
theme ??= 'light';
console.log(theme); // light

let retryCount = 0;
retryCount ??= 3;
console.log(retryCount); // 0

// 5. Important syntax rule
// Mixing ?? with || or && needs parentheses.
// console.log(null || undefined ?? 'default'); // SyntaxError
console.log((null || undefined) ?? 'default'); // default

// Interview tip:
// Use ?? when 0, '', or false are valid values and should not be replaced.
