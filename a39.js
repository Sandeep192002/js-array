function filterFalsyValues(arr) {
    return arr.filter(Boolean); // Efficiently use Boolean coercion
  }
  
  const testData = [58, '', 'abcd', true, null, false, 0];
  console.log(filterFalsyValues(testData)); // Output: [58, "abcd", true