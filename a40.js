function arrayRange(start, length) {
    if (length < 0) {
      throw new Error("Length cannot be negative.");
    }
  
    return Array.from({ length }, (_, i) => start + i);
  }
  
  console.log(arrayRange(1, 4));  // Output: [1, 2, 3, 4]
  console.log(arrayRange(-6, 4)); // Output: [-6, -5, -4, -3