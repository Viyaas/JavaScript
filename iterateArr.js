function filteredArray(arr, elem) {
    let newArr = [];
    for(let i =0; i<arr.length;i++)
    {
      if(arr[i].indexOf(elem == -1))
      {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  /* Sometimes when working with arrays, it is very handy to be able to iterate through each item 
  to find one or more elements that we might need, 
  or to manipulate an array based on which data items meet a certain set of criteria. 
  JavaScript offers several built in methods that each iterate over arrays in slightly 
  different ways to achieve different results
  */