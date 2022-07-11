let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() 
  { 
    return " This dog has " + this.numLegs + " legs. ";  
    }
};
console.log(dog.sayLegs());

// create object and invoke the function in inside properites 
// also using this key words to run the function
// this key word is used to reuse the code for anytime