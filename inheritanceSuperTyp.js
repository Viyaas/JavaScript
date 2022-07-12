function Cat(name) {
    this.name = name;
  }  // fun 1
  
  Cat.prototype = {
    constructor: Cat,
     
  };

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

 

let duck = Object.create(Animal.prototype);  
duck.eat();
let beagle = Object.create(Animal.prototype);  
beagle.eat();
 
