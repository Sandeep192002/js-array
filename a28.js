function longestCommonStartingSubstring(strs) {
    let prefix = strs[0]; // Initialize with the first string
  
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        // Shorten the prefix while it's not a starting substring of the current string
        prefix = prefix.substring(0, prefix.length - 1);
        if (!prefix) { // If prefix becomes empty, no common substring exists
          return "";
        }
      }
    }
  
    return prefix;
  }
  
  console.log(longestCommonStartingSubstring(['go', 'google'])); // Output: "go"