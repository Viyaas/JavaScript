function Account()
{
    let password = "Bank@123";


    this.getPassword = () => password; 
    // The privileged method, because it has access to the private variable 
    // This is possible because password  is declared in the same context
    // as getPassword 
    // In JavaScript, 
    // a function always has access to the context in which it was created. This is called closure.
}

let check = new Account();
console.log(check.getPassword());

// Therefore, any part of your code can easily change the name of Account to any value. 

/* 
The simplest way to make this public property private is by creating a variable 
within the constructor function. This changes the scope of that variable to be within ,
the constructorfunction versus available globally
This way, the variable can only be accessed and changed by methods
 also within the constructor function.
*/

