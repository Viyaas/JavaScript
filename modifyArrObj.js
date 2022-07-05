let user = {
    name: 'Viyas',
    age: 21,
    data: {
      username: 'viyaa',
      joinDate: 'may 23 2022',
      organization: 'freeCodeCamp',
      friends: [
        'jack',
        'tamil',
        'saran'
      ],
      location: {
        city: 'Trichy',
        state: 'Tamil Nadu',
        country: 'India'
      }
    }
  };
  
  function addFriend(userObj, friend) {
   
   userObj.data.friends.push(friend) ;  // add the function through in using push method 
  return userObj.data.friends;
  }
  
 addFriend(user, 'suresh');  // add friend name on separate using function 

  console.log(user);