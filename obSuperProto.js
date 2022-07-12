function Cat(name) {
    this.name = " BlackCat";
  }  // fun 1
  
  Cat.prototype = {
    constructor: Cat,
     
  };
  
  function Bear(name) {
    this.name = "Bear";
  } // fun 2
  
  Bear.prototype = {
    constructor: Bear,
     
  };
  
  function Animal() {  }   // superType 
  
  Animal.prototype = {
    constructor: Animal,
    eat : function()  // describe eat function in  
    {
      console.log(" Yum Yum Yum  "+this.name)
    }
  
  };

const cat = Object.create(Animal.prototype);
cat.eat();