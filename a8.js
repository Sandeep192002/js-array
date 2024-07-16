function findMostFrequent(arr) {
    // Create an object to store item counts
    const counts = {};
  
    // Count occurrences of each item
    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1;
    }
  
    // Find the item with the highest count
    let mostFrequentItem;
    let maxCount = 0;
  
    for (const item in counts) {
      if (counts[item] > maxCount) {
        mostFrequentItem = item;
        maxCount = counts[item];
      }
    }
  
    // Return the most frequent item and its count (formatted string)
    return ('${mostFrequentItem} (${maxCount} times)');
  }
  
  const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  
  console.log(findMostFrequent(arr1)); // Output: a (5 times)