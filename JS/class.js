//Java script classes seem to work the same way as long you keep the scope rules in mind

//Factory function is the old way to define private variables to an object.
function pizzaFactory(pizzaSize){
    const crust="original";
    const size = pizzaSize;
    return {
        bake: () => console.log( `baking a ${size} ${crust} pizza.`)
    };
}



//apperently there has been a new way to create public and private fields in JS classes
//private fields in a class are indicated with a #
//example

class Pizza {
    crust= "original";
    #sauce = "traditional";
    #size;
    constructor (pizzaSize, pizzaCrust)
    {
        this.#size=pizzaSize;// as you can see, in order to access the variable you need to use #
        this.crust=pizzaCrust;
    }
}
