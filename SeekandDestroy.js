function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  // in this above program they will find and match the same number in array
  // as we pass in arguments 