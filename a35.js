function getRandomItem(arr) {
    if (arr.length === 0) {
      throw new Error("Cannot get a random item from an empty array.");
    }
  
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  const items = ["apple", "banana", "cherry"];
  
  console.log(getRandomItem(items)); // Output: (random item from the array