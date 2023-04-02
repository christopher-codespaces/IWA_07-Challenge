// There are a few issues with the current code that need to be fixed.

// The variables for leo and sarah are not being interpolated correctly, so the values are not being inserted into the string. The syntax should be ${variableName} to properly interpolate the values.

// The owed variable is being calculated incorrectly. It's currently concatenating the strings "R" and the balances for Leo and Sarah, but not converting them to numbers before adding them together. Instead, it should parse the strings as floats using parseFloat(), add them together, and then use toFixed() to format the result as a string with two decimal places.

// The leoSurname and sarahName variables have extra spaces that should be removed.

// There are a few other formatting issues that need to be fixed, such as adding a newline character (\n) at the beginning of the string to create an empty line, and using two spaces to indent the total line.

const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21";

const divider = "----------------------------------\n";

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2);
const leo = `${leoName} ${leoSurname} (Owed: R ${leoBalance})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${sarahBalance})\n`;
const total = "  Total amount owed: R " + owed + "\n";
const result = "\n" + leo + sarah + divider + total + divider;

console.log(result);
