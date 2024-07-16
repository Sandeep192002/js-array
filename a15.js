const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const ordinal = ["th", "st", "nd", "rd"];

// Access first element (index 0)
const firstColor = color[0]; // "Blue "
const firstOrdinal = ordinal[0]; // "th"

// Access last element (index length - 1)
const lastColor = color[color.length - 1]; // "Yellow "
const lastOrdinal = ordinal[ordinal.length - 1]; // "rd"

// Access element by specific index (e.g., third element)
const thirdColor = color[2]; // "Red"

console.log("First color:", firstColor);
console.log("First ordinal:", firstOrdinal);
console.log("Last color:", lastColor);
console.log("Last ordinal:", lastOrdinal);
console.log("Third color:", thirdColor);