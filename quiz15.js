function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a","b","c","d","e","f"],2));

  // in Quiz chunken Monkey ?
  // get the all letters in 2d Dimensional array 
  // 