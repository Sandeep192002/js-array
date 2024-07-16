function joinArray(arr, separator = ",") {
    // Use the join method to concatenate elements with a specified separator
    return arr.join(separator);
  }
  
  const myColor = ["Red", "Green", "White", "Black"];
  
  console.log(joinArray(myColor)); // "Red,Green,White,Black" (default separator)
  console.log(joinArray(myColor, "+")); // "Red+Green+White+Black" (custom separator)