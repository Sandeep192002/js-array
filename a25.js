function sortByTitle(arr) {
    return arr.sort((obj1, obj2) => {
      const title1 = obj1.title.toLowerCase(); // Sort by lowercase title for case-insensitive order
      const title2 = obj2.title.toLowerCase();
      return title1.localeCompare(title2); // Use localeCompare for proper string comparison
    });
  }