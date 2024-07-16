function insertDashes(number) {
    // Handle invalid input (non-numeric values)
    if (isNaN(number)) {
      return "Invalid input: Please enter a number.";
    }
  
    // Convert the number to a string for easier manipulation
    const numberString = number.toString();
  
    // Initialize an empty string to store the result
    let result = "";
  
    // Iterate through each character of the string
    for (let i = 0; i < numberString.length; i++) {
      const currentDigit = numberString[i];
      const previousDigit = numberString[i - 1] || ""; // Handle the first digit
  
      // Check for even digits and add dashes only between consecutive evens
      if (currentDigit % 2 === 0 && previousDigit % 2 === 0) {
        result += "-"; // Add a dash before the current digit (except for the first one)
      }
      result += currentDigit; // Append the current digit to the result
    }
  
    return result;
  }
  
  // Prompt for user input
  const userInput = prompt("Enter a number: ");
  
  // Convert input to a number (for potential calculations later)
  const inputNumber = parseInt(userInput);
  
  // Call the function and display the result
  const withDashes = insertDashes(inputNumber);
  console.log(withDashes);