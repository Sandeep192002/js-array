function sumOfSquares(arr) {
    // Handle invalid input (non-numeric array)
    if (!arr.every(Number.isFinite)) {
      return "Invalid input: Array must contain only numbers.";
    }
  
    // Efficiently calculate sum of squares using reduce with arrow function
    return arr.reduce((acc, num) => acc + num * num, 0);
  }
  
  const numbers = [1, 2, 3, 4];
  
  console.log(sumOfSquares(numbers)); // Output: 30
  console.log(sumOfSquares([1, "a", 3])); // Output: Invalid input: Array must contain only numbers.