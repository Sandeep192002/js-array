function move(arr, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
      throw new Error("Invalid indices: fromIndex and toIndex must be within the array bounds.");
    }
  
    if (fromIndex === toIndex) {
      return arr; // No need to move if indices are the same
    }
  
    // Efficiently move element using splice
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex < fromIndex ? toIndex : toIndex + 1, 0, element);
  
    return arr;
  }
  
  console.log(move([10, 20, 30, 40, 50], 0, 2)); // Output: [20, 30, 10, 40, 50]
  console.log(move([10, 20, 30, 40, 50], -1, -2)); // Output: [10, 20, 30, 50, 40]