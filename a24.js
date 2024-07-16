function removeFalsyValues(arr) {
    return arr.filter(item => Boolean(item)); // Use Boolean coercion for efficiency
  }
  
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  
  console.log(removeFalsyValues(sampleArray)); // Output: [15, -22, 47]