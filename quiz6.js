function confirmEnding(str, target) {
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
  }
  console.log(confirmEnding("Viyas", "S"));  

  // finding the string that checks with conform ending or not!