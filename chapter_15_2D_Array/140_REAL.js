// Real SDET examples with 2D arrays

let loginData = [
  ["username", "password", "expectedResult"],
  ["admin", "admin123", "success"],
  ["locked_user", "pass123", "account locked"],
  ["invalid_user", "wrong", "invalid credentials"]
];

// Skip header row and print test data.
for (let row = 1; row < loginData.length; row++) {
  let username = loginData[row][0];
  let password = loginData[row][1];
  let expectedResult = loginData[row][2];

  console.log(`Run login test with ${username}, ${password}, ${expectedResult}`);
}

// Convert table data into array of objects.
let headers = loginData[0];
let testObjects = [];

for (let row = 1; row < loginData.length; row++) {
  let testCase = {};

  for (let col = 0; col < headers.length; col++) {
    testCase[headers[col]] = loginData[row][col];
  }

  testObjects.push(testCase);
}

console.log(testObjects);

// Interview point:
// In real automation, CSV or Excel data often becomes a 2D array first,
// then we convert it to objects for readable test scripts.
