function arrayFilled(length, value = 0) {
    return Array.from({ length }, () => value);
  }
  
  console.log(arrayFilled(6, 0)); // Output: [0, 0, 0, 0, 0, 0]
  console.log(arrayFilled(4, 11)); // Output: [11, 11