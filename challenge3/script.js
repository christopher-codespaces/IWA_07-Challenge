// There are a few issues with the current code that need to be fixed.

// The variables for leo and sarah are not being interpolated correctly, so the values are not being inserted into the string. The syntax should be ${variableName} to properly interpolate the values.

// The owed variable is being calculated incorrectly. It's currently concatenating the strings "R" and the balances for Leo and Sarah, but not converting them to numbers before adding them together. Instead, it should parse the strings as floats using parseFloat(), add them together, and then use toFixed() to format the result as a string with two decimal places.

// The leoSurname and sarahName variables have extra spaces that should be removed.

// There are a few other formatting issues that need to be fixed, such as adding a newline character (\n) at the beginning of the string to create an empty line, and using two spaces to indent the total line.

const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------\n';

// Only change code below this line
// Calculate the total amount owed by adding Leo's balance to Sarah's balance. The parseFloat() function is used to convert the balance strings to numbers before they are added together.

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})\n`;
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})\n`;
// Define strings that represent Leo's and Sarah's names, surnames and balances, using string interpolation and the toFixed() method to ensure that the balances are formatted with 2 decimal places.
const total = `  Total amount owed: R ${Math.abs(owed).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
// Define a string that represents the total amount owed, using Math.abs() to ensure that the number is positive and toLocaleString() to format it with commas and 2 decimal places.
const result = '\n' + leo + sarah + divider + total + divider;
// Combine the strings for Leo's name, surname and balance, Sarah's name, surname and balance, the divider, and the total amount owed, into one result string.
console.log(result);
