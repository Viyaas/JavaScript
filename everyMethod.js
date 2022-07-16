function checkPositive(arr) {
   
          return arr.every(function(checkPositive){
            return checkPositive > 0;
          })
   }
  
 var value =  checkPositive([1, 2, -8, 7, 5]);

        console.log(value);

  // The every method works with arrays to check if every element passes a particular test
  // It returns a Boolean value - true if all values meet the criteria, false if not.