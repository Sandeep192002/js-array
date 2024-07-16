function emptyArray(arr) {
    // Create a new empty array
    return [];
  }
  
  const myArray = [1, 2, 3];
  const emptyCopy = emptyArray(myArray);
  
  console.log(myArray); // Output: [1, 2, 3] (original array remains unchanged)
  console.log(emptyCopy); // Output: [