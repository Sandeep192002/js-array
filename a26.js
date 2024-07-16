function findSumPair(numbers, target) {
    const map = {};
  
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (complement in map) {
        return [map[complement], i]; // Return indices of the pair
      }
      map[numbers[i]] = i; // Store element and its index in the map
    }
  
    return null; // No pair found
  }
  
  const numbers = [10, 20, 10, 40, 50, 60, 70];
  const target = 50;
  
  const pair = findSumPair(numbers, target);
  
  console.log(pair ? pair.join(", ") : "No pair found with sum", target); // Output: 3, 4