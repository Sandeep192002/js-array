function findDuplicates(arr) {
    // Handle invalid input (non-array)
    if (!Array.isArray(arr)) {
      return "Invalid input: Please provide an array.";
    }
  
    // Efficiently find duplicates using a Set
    const uniqueSet = new Set();
    const duplicates = [];
  
    for (const item of arr) {
      if (uniqueSet.has(item)) {
        duplicates.push(item);
      } else {
        uniqueSet.add(item);
      }
    }
  
    // Return duplicates or an informative message if none are found
    return duplicates.length > 0 ? duplicates : "No duplicates found.";
  }
  
  // Sample array
  const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7];
  
  const result = findDuplicates(numbers);
  console.log(result); // Output: [1, 2, 3] (or "No duplicates found" if no duplicates exist)
  
  // Test with non-array input
  console.log(findDuplicates("hello")); // Output: "Invalid input: Please provide an array."