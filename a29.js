function num_string_range(start, end, step = 1) {
    const range = [];
    const isString = typeof start === 'string'; // Check if start is a string
  
    if (isString && start.length !== 1 && end.length !== 1) {
      throw new TypeError('Strings with one character are supported.');
    }
  
    if (isString) {
      // Generate character range (adjust for case sensitivity if needed)
      const startCode = start.charCodeAt(0);
      const endCode = end.charCodeAt(0);
      for (let code = startCode; code <= endCode; code += step) {
        range.push(String.fromCharCode(code));
      }
    } else {
      // Generate numeric range
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
    }
  
    return range;
  }
  
  console.log(num_string_range('a', 'z', 2)); // Output: ["a", "c", "e", "g", ...]
  console.log(num_string_range(0, 25, 5)); // Output: [0, 5, 10, 15, 20, 25