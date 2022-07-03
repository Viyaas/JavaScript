class thermostat{
    constructor(fahrenheit)
    {
        this.fahrenheit = fahrenheit;
    }

    get temperature()  //  hide implementation and show the funcationally to user 
    {
        return (5/9) * (this.fahrenheit - 32);
    }
    set temperature(Celsius)
    {
        this.fahrenheit = (Celsius  * 9.0 ) / 5+32;
    }
}  // this getter and setter is used to achieve abstraction

const thermo = new thermostat(50);
let temp = thermo.temperature;
thermo.temperature = 26;
console.log(temp);