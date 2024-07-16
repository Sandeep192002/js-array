function union(arr1, arr2) {
    const uniqueSet = new Set([...arr1, ...arr2]); // Spread syntax to combine arrays
    return Array.from(uniqueSet);
  }
  
  const set1 = [1, 2, 3];
  const set2 = [100, 2, 1, 10];
  
  console.log(union(set1, set2)); // [1, 2, 3, 10, 100]