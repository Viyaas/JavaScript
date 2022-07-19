function whatIsInAName(collection, source) {
    
    const sourceKey = Object.keys(source);

    return collection.filter(obj => {
    for(let i = 0; i <= sourceKey.length; i++)
    {
      if(!obj.hasOwnProperty(sourceKey[i])
            || obj[sourceKey[i]] !== source[sourceKey[i]] )
      {
           return false;
      }
      return true;
    }
    });


}

console.log(whatIsInAName(
    [{ first: "Romeo", last: " Juliet" }, 
    { first: " Viyas ", last: null }, 
    { first: " Radha ", last: " Krishna " }], 
    { last: " Krishna " }));


    // first index of the argument is declaring their names
    // second index of the arg is declaring which name is want to execute the 
    // command line 