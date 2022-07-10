function truncateString(str, num) {
    if (str.length > num)
    {
      return str.slice(1,num) + "...";
    }else{
      
      return str; 
    }
    
  }
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 30));


// this is truncate string 