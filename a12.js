function sumAndProduct(arr) {
    // Handle invalid input (non-numeric array)
    if (!arr.every(Number.isFinite)) {
      return "Invalid input: Array must contain only numbers.";
    }
  
    let sum = 0;
    let product = 1;
  
    for (const num of arr) {
      sum += num;
      product *= num;
    }
  
    return { sum, product };
  }
  
  const integers = [5, 2, 3];
  
  const result = sumAndProduct(integers);
  
  console.log("Sum:", result.sum); // Output: Sum: 10
  console.log("Product:", result.product); // Output: Product: 30
  console.log(sumAndProduct([1, "a", 3])); // Output: Invalid input: Array must contain only numbers