function findLongestWordLength(str) {
    const result = str.split(" ");
    if(result.length===1){
      return result[0].length;
    }
    
      return Math.max(result[0].length , findLongestWordLength(result.slice(1).join(" "))
      );
      
    }

 console.log(findLongestWordLength(" Software developer is the Good Job!"));
// find the length of String