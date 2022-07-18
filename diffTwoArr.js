function diffArray(arr1, arr2) {
     return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
  
  
  }
  // find the statement below differentiate the arrays 
  console.log(diffArray([1, 3,5,7], [1, 3, 4, 5,7,9]));