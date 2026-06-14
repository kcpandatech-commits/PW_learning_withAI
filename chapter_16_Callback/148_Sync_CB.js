// Synchronous callback
// The callback runs immediately before the next line continues.

function validateResponse(response, callback) {
  console.log("Validating response...");
  callback(response);
  console.log("Validation completed");
}

function checkStatusCode(response) {
  if (response.status === 200) {
    console.log("Status code is correct");
  } else {
    console.log("Status code is incorrect");
  }
}

let apiResponse = {
  status: 200,
  body: { message: "success" }
};

validateResponse(apiResponse, checkStatusCode);
console.log("Next line after validation");

// Interview point:
// Synchronous callbacks block the flow until callback execution is finished.
