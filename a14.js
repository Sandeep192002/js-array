function removeDuplicates(arr) {
    // Create a new Set to store unique elements (case-insensitive)
    const uniqueSet = new Set(arr.map(item => item.toLowerCase()));
  
    // Convert the Set back to an array and return it
    return Array.from(uniqueSet);
  }
  
  const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "indigo", "Yellow "];
  
  const uniqueColors = removeDuplicates(colors);
  
  console.log(uniqueColors); // Output: ["blue ", "green", "red", "orange", "violet", "indigo", "yellow "]