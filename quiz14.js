function chunkArrayInGroups(arr, size) {
    let array = [];
     while (arr.length > 0)
     {
       array.push(arr.splice(0 , size));
     }
     return array;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

