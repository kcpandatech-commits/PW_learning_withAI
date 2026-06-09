# String Cheat Sheet

## Create & Convert

| Method | Example | Result |
|---|---|---|
| `String()` | `String(123)` | `"123"` |
| `toString()` | `(123).toString()` | `"123"` |
| Template literal | `` `Hi ${"QA"}` `` | `"Hi QA"` |
| `split()` | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `Array.from()` | `Array.from("test")` | `["t", "e", "s", "t"]` |

## Search & Check
 
| Method | Example | Result |
|---|---|---|
| `includes()` | `"playwright".includes("play")` | `true` |
| `startsWith()` | `"https://x".startsWith("https")` | `true` |
| `endsWith()` | `"file.js".endsWith(".js")` | `true` |
| `indexOf()` | `"banana".indexOf("a")` | `1` |
| `lastIndexOf()` | `"banana".lastIndexOf("a")` | `5` |
| `search()` | `"login?x=1".search(/login/)` | `0` |
| `match()` | `"a1b2".match(/\d/g)` | `["1", "2"]` |
| `matchAll()` | `[..."a1b2".matchAll(/\d/g)]` | array of matches |
| `at()` | `"play".at(-1)` | `"y"` |
| `charAt()` | `"play".charAt(0)` | `"p"` |
| `charCodeAt()` | `"A".charCodeAt(0)` | `65` |
| `codePointAt()` | `"😀".codePointAt(0)` | `128512` |

## Case & Trim

| Method | Example | Result |
|---|---|---|
| `toUpperCase()` | `"qa".toUpperCase()` | `"QA"` |
| `toLowerCase()` | `"QA".toLowerCase()` | `"qa"` |
| `trim()` | `"  test  ".trim()` | `"test"` |
| `trimStart()` | `"  test".trimStart()` | `"test"` |
| `trimEnd()` | `"test  ".trimEnd()` | `"test"` |

## Extract & Replace

| Method | Example | Result |
|---|---|---|
| `slice()` | `"playwright".slice(0, 4)` | `"play"` |
| `slice()` | `"playwright".slice(-5)` | `"right"` |
| `substring()` | `"testing".substring(0, 4)` | `"test"` |
| `replace()` | `"bug bug".replace("bug", "defect")` | `"defect bug"` |
| `replaceAll()` | `"bug bug".replaceAll("bug", "defect")` | `"defect defect"` |
| `repeat()` | `"ha".repeat(3)` | `"hahaha"` |
| `padStart()` | `"7".padStart(3, "0")` | `"007"` |
| `padEnd()` | `"7".padEnd(3, "0")` | `"700"` |

## QA Useful Examples

| Task | Example | Result |
|---|---|---|
| Ignore case compare | `"Pass".toLowerCase() === "pass"` | `true` |
| Trim before validation | `"  user@test.com  ".trim()` | `"user@test.com"` |
| Extract OTP | `"OTP 456789".match(/\d+/)[0]` | `"456789"` |
| Check only digits | `/^\d+$/.test("12345")` | `true` |
| Check email shape | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("a@b.com")` | `true` |

## Interview Notes

| Topic | Key Point | Example |
|---|---|---|
| Immutability | String methods return new strings | `"abc".toUpperCase()` |
| `length` | Property, not method | `"test".length` |
| `slice` vs `substring` | `slice` supports negative indexes | `"hello".slice(-2)` |
| Not found | `indexOf()` returns `-1` | `"abc".indexOf("z")` |
| Regex check | `test()` returns boolean | `/qa/.test("qa engineer")` |

