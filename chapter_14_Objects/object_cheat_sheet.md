# Object Cheat Sheet

## Create & Access

| Concept | Example | Result |
|---|---|---|
| Object literal | `{ name: "Aman", role: "QA" }` | object |
| Dot access | `user.name` | `"Aman"` |
| Bracket access | `user["name"]` | `"Aman"` |
| Dynamic key | `user[fieldName]` | value of that key |
| Nested access | `response.data.user.email` | nested value |
| Optional chaining | `response.data?.user?.email` | value or `undefined` |

## Add, Update & Delete

| Task | Example | Result |
|---|---|---|
| Add property | `user.city = "Pune"` | adds `city` |
| Update property | `user.role = "Senior QA"` | updates `role` |
| Delete property | `delete user.city` | removes `city` |
| Check key | `"role" in user` | `true` or `false` |
| Own key check | `Object.hasOwn(user, "role")` | `true` or `false` |

## Object Methods

| Method | Example | Result |
|---|---|---|
| `Object.keys()` | `Object.keys(user)` | array of keys |
| `Object.values()` | `Object.values(user)` | array of values |
| `Object.entries()` | `Object.entries(user)` | array of key-value pairs |
| `Object.fromEntries()` | `Object.fromEntries(entries)` | object |
| `Object.assign()` | `Object.assign(target, source)` | merged target |
| `Object.freeze()` | `Object.freeze(config)` | prevents changes |

## Destructuring

| Task | Example | Result |
|---|---|---|
| Basic destructuring | `let { name, role } = user` | creates variables |
| Rename variable | `let { name: userName } = user` | `userName` |
| Default value | `let { city = "NA" } = user` | `"NA"` if missing |
| Nested destructuring | `let { data: { id } } = response` | nested variable |
| Function parameter | `function print({ id, status }) {}` | extracts arguments |

## Copy, Merge & JSON

| Task | Example | Key Point |
|---|---|---|
| Reference copy | `let b = a` | both point to same object |
| Shallow copy | `let b = { ...a }` | top-level copy only |
| Merge objects | `{ ...defaults, ...local }` | later values override earlier |
| JSON string | `JSON.stringify(user)` | object to string |
| JSON parse | `JSON.parse(jsonText)` | string to object |

## QA Useful Examples

| Task | Example | Result |
|---|---|---|
| API status | `response.status === 200` | `true` or `false` |
| Validate key | `Object.hasOwn(response, "data")` | key exists |
| Count statuses | `{ Passed: 4, Failed: 1 }` | frequency object |
| Group tests | `{ Passed: [...], Failed: [...] }` | grouped object |
| Safe nested read | `response.data?.user?.email` | avoids crash |

## Interview Notes

| Topic | Key Point | Example |
|---|---|---|
| Object vs array | Object stores named properties | `{ id: 1 }` |
| Reference type | Objects are compared by reference | `{}` === `{}` is `false` |
| Shallow copy | Spread does not deeply copy nested data | `{ ...user }` |
| `this` | Regular method gets calling object | `user.getName()` |
| Arrow method | Arrow function has no own `this` | avoid for object methods |
| Destructuring | Cleaner property extraction | `let { id } = test` |
