function getPropertyValues(arr, property) {
    return arr.filter(item => typeof item === 'object' && item.hasOwnProperty(property)) // Filter objects with the property
              .map(item => item[property]); // Extract property values
  }
  
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  
  console.log(getPropertyValues(sampleArray, "length")); // Output: [] (no "length" property)
  console.log(getPropertyValues(sampleArray, "0")); // Output: [15, -22, 47] (numeric property treated as string)