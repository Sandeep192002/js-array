function swapCase(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
  
    return result;
  }
  
  const inputString = 'The Quick Brown Fox';
  
  console.log(swapCase(inputString)); // Output: tHE qUICK bROWN fOX