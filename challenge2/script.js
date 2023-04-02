const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log(`Good morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good morning, ${firstname}!`);
} else {
  console.log("Good morning!");
}

// To correctly log the dynamically entered name, we need to use template literals instead of string literals. Template literals are enclosed in backticks (`) instead of quotes and allow us to insert variables using ${variableName} syntax.

// Additionally, the expression inside the console log is not correctly formatted. We need to use the ternary operator to check if the nickname is present and if so, use it instead of the firstname.

// To handle the case when neither the nickname nor the firstname is present, we can add an else statement to the ternary operator that logs "Good morning!".
