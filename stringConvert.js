 function urlSlug(title) {

    return title.toLowerCase().trim().split(/\s+/).join("-")
  
  
  }
   
  let convert = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  console.log(convert);
  // this above code => using a statement to remove the spaces and add the -
  // in between the statements 
 