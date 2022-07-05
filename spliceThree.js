function htmlColorNames(arr) {
    
    const startIndex = 0;
    const deleteIndex = 2;
    arr.splice(startIndex, deleteIndex , ' Hello  ',' Viyas ')
  // first parameter represents the index on the array from which to begin removing elements,
// while the second parameter indicates the number of elements to delete.
// and  note that after declaring two parameters hereafter can be any number of elements 
// which get inserted in the end of array
    return arr;
  }
  
  console.log(htmlColorNames([' Which ', ' who ', ' Your are a ', ' Backend ', ' Developer ! ']));