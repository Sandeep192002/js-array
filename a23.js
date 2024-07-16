function difference(arr1, arr2) {
    const set1 = new Set(arr1); // Store unique elements of arr1 in a Set
    const filtered = arr2.filter(item => !set1.has(item)); // Filter items not in set1
    return filtered;
  }
  
  const data1 = [1, 2, 3];
  const data2 = [100, 2, 1, 10];
  
  console.log(difference(data1, data2)); // ["3", "10", "100"]
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
  console.log(difference(data1, data2)); // ["3", "10", "100"]