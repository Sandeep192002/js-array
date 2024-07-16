function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2]; // Efficiently combine arrays using spread syntax
    return [...new Set(mergedArray)]; // Create a Set to remove duplicates and convert back to an array
  }
  
  const array1 = [1, 2, 3];
  const array2 = [2, 30, 1];
  
  console.log(mergeAndRemoveDuplicates(array1, array2)); // Output: [1, 2, 3, 30