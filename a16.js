function findLeapYears(startYear, endYear) {
    const leapYears = [];
  
    for (let year = startYear; year <= endYear; year++) {
      // Check for leap years (divisible by 4 but not by 100, or divisible by 400)
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  const lowerYear = 2000;
  const upperYear = 2025;
  
  const leapYearsFound = findLeapYears(lowerYear, upperYear);
  
  console.log("Leap years between", lowerYear, "and", upperYear, ":", leapYearsFound);