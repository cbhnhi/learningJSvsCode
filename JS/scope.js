//var, let , and const

//var is a legacy declaration operator, I should prefer the usage of let and const
//the main issue with var seems to be that it has no protection against multiple declarations.
//both var and let allow reassignment of the value as long as the variable is not redeclared so let seems o be the supperior choice.
//const is the same as always

//there seems to be a difference in behavior between var, let, and const according to the scope we are working in.
//global scope- all 3 work the same in global scope
//there are 2 types of local scope block scope {} and function local scope function myFunc() {}


//const is block scoped
//let is block scoped
//var is function scoped

//is summary var is better to avoid
//const if const, let if not const