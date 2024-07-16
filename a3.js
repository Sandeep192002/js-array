function first(arr, n = 1) {
    // Handle invalid input (empty array or negative n)
    if (!arr.length || n <= 0) {
      return [];
    }
  
    // Use slice to extract the first n elements (limited by array length)
    return arr.slice(0, Math.min(n, arr.length));
  }