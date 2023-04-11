const value = "3";
console.log(parseInt(value) + 4 + parseInt(value)); // Outputs 10



// The reason why the code initially logs 343 instead of 10 is because the + operator is being used to concatenate strings instead of adding numbers.

// In the expression value + 4 + value, the first + concatenates the string value "3" with the number 4, resulting in the string "34". The second + then concatenates that string with the original value "3", resulting in the string "343".

// To fix this, we can convert the string values to numbers using the parseInt() function,
