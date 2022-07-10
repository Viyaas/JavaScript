function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }

  console.log(frankenSplice([1,2,3],[4,5,6],2));
// arr2 is extend with arr1 and using n parameter using slice and splice method 
// the 3rd parameter is reverse the number which belongs in array they calculate the value only
// length not index based 