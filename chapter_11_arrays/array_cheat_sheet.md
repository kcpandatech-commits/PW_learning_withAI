# Array Cheat Sheet

## Create & Copy

| Method | Example | Result |
|---|---|---|
| Array literal | `[1, 2, 3]` | `[1, 2, 3]` |
| `Array.of()` | `Array.of(5)` | `[5]` |
| `Array.from()` | `Array.from("QA")` | `["Q", "A"]` |
| Spread copy | `[...[1, 2, 3]]` | `[1, 2, 3]` |
| `slice()` copy | `[1, 2, 3].slice()` | `[1, 2, 3]` |

## Add & Remove

| Method | Example | Result |
|---|---|---|
| `push()` | `[1, 2].push(3)` | returns `3`, array becomes `[1, 2, 3]` |
| `pop()` | `[1, 2, 3].pop()` | returns `3`, array becomes `[1, 2]` |
| `unshift()` | `[2, 3].unshift(1)` | returns `3`, array becomes `[1, 2, 3]` |
| `shift()` | `[1, 2, 3].shift()` | returns `1`, array becomes `[2, 3]` |
| `splice()` | `[1, 2, 3].splice(1, 1)` | returns `[2]`, array becomes `[1, 3]` |

## Search & Check

| Method | Example | Result |
|---|---|---|
| `includes()` | `[1, 2, 3].includes(2)` | `true` |
| `indexOf()` | `["a", "b", "a"].indexOf("a")` | `0` |
| `lastIndexOf()` | `["a", "b", "a"].lastIndexOf("a")` | `2` |
| `find()` | `[5, 12, 8].find(n => n > 10)` | `12` |
| `findIndex()` | `[5, 12, 8].findIndex(n => n > 10)` | `1` |
| `some()` | `[1, 2, 3].some(n => n > 2)` | `true` |
| `every()` | `[1, 2, 3].every(n => n > 0)` | `true` |

## Transform & Filter

| Method | Example | Result |
|---|---|---|
| `map()` | `[1, 2, 3].map(n => n * 2)` | `[2, 4, 6]` |
| `filter()` | `[1, 2, 3, 4].filter(n => n % 2 === 0)` | `[2, 4]` |
| `reduce()` | `[1, 2, 3].reduce((t, n) => t + n, 0)` | `6` |
| `flat()` | `[1, [2, 3]].flat()` | `[1, 2, 3]` |
| `flatMap()` | `[1, 2].flatMap(n => [n, n * 2])` | `[1, 2, 2, 4]` |

## Sort & Reverse

| Method | Example | Result |
|---|---|---|
| `sort()` | `["b", "a"].sort()` | `["a", "b"]` |
| numeric `sort()` | `[10, 2, 5].sort((a, b) => a - b)` | `[2, 5, 10]` |
| reverse numeric `sort()` | `[10, 2, 5].sort((a, b) => b - a)` | `[10, 5, 2]` |
| `reverse()` | `[1, 2, 3].reverse()` | `[3, 2, 1]` |
| `toSorted()` | `[3, 1, 2].toSorted()` | `[1, 2, 3]` |
| `toReversed()` | `[1, 2, 3].toReversed()` | `[3, 2, 1]` |

## Join, Slice & Combine

| Method | Example | Result |
|---|---|---|
| `join()` | `["smoke", "sanity"].join(", ")` | `"smoke, sanity"` |
| `slice()` | `[10, 20, 30].slice(1, 3)` | `[20, 30]` |
| `concat()` | `[1, 2].concat([3, 4])` | `[1, 2, 3, 4]` |
| Spread merge | `[...[1, 2], ...[3, 4]]` | `[1, 2, 3, 4]` |

## QA Useful Examples

| Task | Example | Result |
|---|---|---|
| Failed tests | `tests.filter(t => t.status === "failed")` | failed test objects |
| Test names | `tests.map(t => t.name)` | array of names |
| Any failed | `tests.some(t => t.status === "failed")` | `true` or `false` |
| All passed | `tests.every(t => t.status === "passed")` | `true` or `false` |
| Total duration | `tests.reduce((sum, t) => sum + t.duration, 0)` | total number |
| Unique values | `[...new Set(["a", "a", "b"])]` | `["a", "b"]` |

## Interview Notes

| Topic | Key Point | Example |
|---|---|---|
| `map` vs `forEach` | `map` returns new array, `forEach` returns `undefined` | `[1, 2].map(...)` |
| `filter` vs `find` | `filter` returns array, `find` returns first value | `arr.find(...)` |
| `some` vs `every` | `some` needs one true, `every` needs all true | `arr.some(...)` |
| `slice` vs `splice` | `slice` does not mutate, `splice` mutates | `arr.splice(1, 1)` |
| Default `sort` | Sorts as strings | `[10, 2].sort()` gives `[10, 2]` |
| Shallow copy | Nested objects still share reference | `[...arr]` |

