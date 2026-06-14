// Asynchronous callback
// The callback runs later after an async operation completes.

function fetchUser(callback) {
  console.log("Fetching user...");

  setTimeout(function () {
    let user = {
      id: 101,
      name: "KC_Panda",
      role: "QA Engineer"
    };

    callback(user);
  }, 1000);
}

fetchUser(function (user) {
  console.log("User received:");
  console.log(user);
});

console.log("This line runs before user is received");

// Interview point:
// setTimeout, API calls, file reading, and database calls are common async examples.
