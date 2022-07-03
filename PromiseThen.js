const myPromise = new Promise((resolve,reject) => { 
    

    let val = false;   // the value will execute in then and catch method
        if(val)
        {
            resolve("the value is true ");
        }
        else
        {
            reject("the value was not true  ");
        }
    });
    
//  myPromise.then(result =>{
//     console.log(result);         / this method execute when the value is  true
//  })
 myPromise.catch(error =>{
    console.log(error);             // this method execute when the value is not true
 })