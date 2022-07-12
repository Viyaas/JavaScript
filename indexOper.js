function quickCheck(arr, elem) {
    
      if (arr.indexOf(elem) >= 0){
        return true ;
      }
        return false ;
  
   // Since arrays can be changed, or mutated, at any time, there's no guarantee about 
   // where a particular piece of data will be on a given array 
   // that element even still exists. Luckily, 
   // JavaScript provides us with another built-in method, indexOf(),
   // hat allows us to quickly and easily check for the presence of an element on an array. 
   // takes an element as a parameter, and when called, it returns the position, 
   // or index, of that element, or -1 if the element does not exist on the array.
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));