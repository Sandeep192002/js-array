function cloneArray(arr) {
    // Create a shallow copy using slice
    return arr.slice();
  }
  
  const myArray = [1, 2, 4, 0];
  const clonedArray = cloneArray(myArray);
  
  console.log(myArray); // [1, 2, 4, 0] (original array)
  console.log(clonedArray); // [1, 2, 4, 0] (cloned array)