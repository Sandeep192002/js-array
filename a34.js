function nthLargest(arr, n) {
    if (n <= 0 || n > arr.length) {
      throw new Error("Invalid n: must be a positive integer less than or equal to the array length.");
    }
  
    // Efficiently sort using in-place sorting (e.g., quicksort)
    arr.sort((a, b) => b - a);
  
    return arr[n - 1]; // Access the nth largest element (zero-based indexing)
  }
  
  const data = [43, 56, 23, 89, 88, 90, 99, 652];
  
  console.log(nthLargest(data, 4)); // Output: 89