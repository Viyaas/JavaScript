const myPromise = new Promise((resolve,reject) => {  // this is the statement of promise
// this is perform like promise when the statement is true ,
// the promise was resolved either the promise is not true the value was rejected
    let val = 5;

    if(val===5)
    {
        resolve("the value is true "+val);
    }
    else
    {
        reject("the value was not true  "+val);
    }
});

console.log(myPromise);