function last(arr, n = 1) {
    // Handle invalid input (empty array or negative n)
    if (!arr.length || n <= 0) {
      return [];
    }
  
    // Use slice with negative start index to extract the last n elements
    return arr.slice(-Math.min(n, arr.length));
  }