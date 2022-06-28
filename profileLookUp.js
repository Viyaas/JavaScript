const contacts = [
    {
      firstName: "Viyas",
      lastName: "Selvam",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Ice cream"],
    },
    {
      firstName: "Jack",
      lastName: "Mohamed",
      number: "0994372684",
      likes: ["Coding", "Full Stack", " Developer"],
    },
    {
      firstName: " Saran",
      lastName: " Viyas",
      number: "0487345643",
      likes: [" Coffee  ", " Poetist "],
    },
    {
      firstName: "Vijay",
      lastName: "ChandraSekar",
      number: "unknown",
      likes: ["JavaScript", "Gaming", " Developer "],
    },
  ];
  
  function lookUpProfile(name, prop) {
    
    for(let i =0; i<contacts.length; i++)
    {
      if(contacts[i].firstName === name)
      {
        if(prop in contacts[i])
        {
          return contacts[i][prop];           
          }else{
            return "No Such Property";
          }
        }
      }
      return "No such contact";
    }
  console.log(lookUpProfile("Viyas", "likes"));



