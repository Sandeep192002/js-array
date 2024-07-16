function flatten(arr, shallow = false) {
    const result = [];
  
    function flattenHelper(innerArr) {
      for (const item of innerArr) {
        if (Array.isArray(item) && !shallow) {
          flattenHelper(item); // Recursive call for nested arrays
        } else {
          result.push(item);
        }
      }
    }
  
    flattenHelper(arr);
    return result;
  }
  
  const nestedData = [1, [2], [3, [[4]]], [5, 6]];
  
  console.log(flatten(nestedData)); // [1, 2, 3, 4, 5, 6]
  console.log(flatten(nestedData, true)); // [1, 2, 3, [[4]], 5, 6] (shallow flattening)