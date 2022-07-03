
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;   // this ES6 Function features
    }
  };
  
  bicycle.setGear(3);
  console.log(bicycle.gear);