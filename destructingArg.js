const highTemprature = {

    yesterday : 80,
    today : 70,
    tomorrow : 59
};  

// in ES6 new feature was , we can call the values from destructing arrgument from objecct
const { yesterday , tomorrow} = highTemprature;

console.log({yesterday , tomorrow});