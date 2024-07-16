function containsElement(arr, element) {
    // Use some() for efficient existence check
    return arr.some(item => item === element);
  }
  
  console.log(containsElement([2, 5, 9, 6], 5)); // Output: true