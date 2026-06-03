// do while loop
// do while runs the code at least once, then checks the condition.

let pinAttempts = 1;

do {
  console.log(`Attempt number ${pinAttempts}`);
  pinAttempts++;
} while (pinAttempts <= 3);

// Interview point:
// Difference between while and do while:
// while can run zero times, do while runs at least one time.

let x = 10;

do {
  console.log("This prints once even though condition is false");
} while (x < 5);

