
function removeElement(arr, element) {
    const filteredArray = arr.filter(item => item !== element); // Filter elements not equal to the target element
    return filteredArray;
  }
  
  const myArray = [1, 2, 3, 2, 4];
  const elementToRemove = 2;
  
  console.log(removeElement(myArray, elementToRemove)); // Output: [1, 3, 4] (original array not modified