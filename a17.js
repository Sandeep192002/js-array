function shuffleArray(arr) {
    // Use the Fisher-Yates shuffle algorithm for efficient shuffling
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements using destructuring
    }
    return arr;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const shuffledNumbers = shuffleArray(numbers.slice()); // Shuffle a copy to avoid modifying original array
  
  console.log("Original array:", numbers);
  console.log("Shuffled array:", shuffledNumbers)