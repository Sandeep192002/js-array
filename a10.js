function printNestedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      const innerArr = arr[i];
  
      for (let j = 0; j < innerArr.length; j++) {
        console.log(innerArr[j]); // Print each element
      }
    }
  }
  
  const nestedArray = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  
  printNestedArray(nestedArray);