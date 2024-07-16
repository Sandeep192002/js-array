function arrayFilled(length, value = "") {
    return Array.from({ length }, () => value);
  }
  
  console.log(arrayFilled(3, 'default value')); // ["default value", "default value", "default value"]
  console.log(arrayFilled(4, 'password'));      // ["password", "password", "password", "password"