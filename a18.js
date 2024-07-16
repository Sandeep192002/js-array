function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Find the middle index
  
      if (arr[mid] === target) {
        return mid; // Target found at the middle index
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  const items = [1, 2, 3, 4, 5, 7, 8, 9];
  
  console.log(binarySearch(items, 1)); // 0
  console.log(binarySearch(items, 5)); // 4
  console.log(binarySearch(items, 6)); // -1 (not found