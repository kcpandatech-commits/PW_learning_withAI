// Callback hell example
// Too many nested callbacks make code hard to read and maintain.

function openBrowser(callback) {
  setTimeout(function () {
    console.log("Browser opened");
    callback();
  }, 500);
}

function login(callback) {
  setTimeout(function () {
    console.log("Login completed");
    callback();
  }, 500);
}

function addProduct(callback) {
  setTimeout(function () {
    console.log("Product added to cart");
    callback();
  }, 500);
}

function checkout(callback) {
  setTimeout(function () {
    console.log("Checkout completed");
    callback();
  }, 500);
}

openBrowser(function () {
  login(function () {
    addProduct(function () {
      checkout(function () {
        console.log("End to end test completed");
      });
    });
  });
});

// Interview point:
// Callback hell can be improved using promises and async/await.
