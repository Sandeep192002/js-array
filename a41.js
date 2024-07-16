function rangeBetween(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
      throw new Error("Input must be numbers.");
    }
  
    const length = Math.abs(end - start) + 1; // Calculate the absolute difference for length
    const direction = start <= end ? 1 : -1; // Determine the direction of iteration (ascending or descending)
    return Array.from({ length }, (_, i) => start + i * direction);
  }
  
  // Test data:
  console.log(rangeBetween(4, 7)); // Output: [4, 5, 6, 7]
  console.log(rangeBetween(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]