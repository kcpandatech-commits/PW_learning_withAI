// Callback hell with multiple test steps

function step(name, callback) {
  setTimeout(function () {
    console.log(name);
    callback();
  }, 200);
}

step("1. Open browser", function () {
  step("2. Navigate to login page", function () {
    step("3. Enter username", function () {
      step("4. Enter password", function () {
        step("5. Click login", function () {
          step("6. Search product", function () {
            step("7. Add product to cart", function () {
              step("8. Open cart", function () {
                step("9. Checkout", function () {
                  step("10. Validate order confirmation", function () {
                    console.log("Test completed");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// This style works, but it becomes difficult when steps increase.
