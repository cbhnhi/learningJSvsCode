//"use strict" enforces some of the JS rules that in some cases the interperter is able to solve and make work
//this is usefull for us for practicing error handling

"use strict";
variable = "Orianne";
console.log(variable);

const makeError = () => {
    try {
        const name= "Orrianne";
        name= "Benjamin";
    } catch(err)
    {
        //options
        console.log(err);
        console.error(err);
        console.warn(err);
        console.table(err);//shows stack and content of error
    //err.message err.stack 
    
    }
    finally{
        
    }
function customError(message)
{
    this.mesage=message;
    this,name= "customError";
    this.stack = `${this.name}: ${this.message}`;
}
}