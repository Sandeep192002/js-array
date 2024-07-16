function difference(arr1, arr2) {
    const combinedSet = new Set([...arr1, ...arr2]); // Combine arrays and create a Set (automatically removes duplicates)
    const uniqueElements = [...combinedSet].map(
      item => (typeof item === 'object' ? JSON.stringify(item) : item) // Handle nested arrays by converting them to strings for uniqueness check
    );
    return new Set(uniqueElements); // Convert back to a Set to remove duplicate strings (if any)
  }
  
  const test1 = [1, 2, 3], test2 = [100, 2, 1, 10];
  console.log(difference)