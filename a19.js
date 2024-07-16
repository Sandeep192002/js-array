function sumCorrespondingElements(arr1, arr2) {
    // Handle arrays with different lengths
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      // Access elements considering potential missing values
      const element1 = arr1[i] || 0; // Use 0 for missing values in arr1
      const element2 = arr2[i] || 0; // Use 0 for missing values in arr2
  
      result.push(element1 + element2);
    }
  
    return result;
  }
  
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  
  const summedElements = sumCorrespondingElements(array1, array2);
  
  console.log(summedElements); // Output: [4, 5, 8, 10, 12, 13