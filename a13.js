function addAndDisplay(arr) {
    // Prompt for user input while validating that it's a number
    while (true) {
      const newItem = prompt("Enter a number to add (or 'q' to quit): ");
      if (newItem === 'q' || newItem === 'Q') {
        break;
      }
  
      const parsedNumber = parseFloat(newItem);
  
      if (Number.isNaN(parsedNumber)) {
        console.error("Invalid input: Please enter a number or 'q' to quit.");
        continue;
      }
  
      arr.push(parsedNumber);
      console.log("Added:", parsedNumber);
    }
  
    console.log("Items in the array:", arr);
  }
  
  const blankArray = [];
  
  addAndDisplay(blankArray)