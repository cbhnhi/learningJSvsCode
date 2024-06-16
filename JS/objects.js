//objects
//objects in java script come with key-value pairs in curly bracs
const myObg= {name:"Benjamin"}
const anotherObj = {
alive: true,
answer: 42,
dizzy: "yes",

beverages: {
    Day:"Tea",
    Night:"Water"
},
hobbies: ["Eat","sleep","die"],

action: function (){
return `Hello World ${this.beverages.Night}`;
}
};
// in ordr to pull from object in string ` ` needs to be used
console.log(anotherObj.beverages.Day);
console.log(anotherObj.action());

//inheritence


const vehicle= {
    wheels: 4,
    engine: function()
    {
        return "Vroooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors=2;
console.log("truck print: " + truck);
console.log("the inheritence is missing!");
console.log("truck wheels print"+ truck.wheels)
console.log("to see the inherited members you need to use Object.getPrototypeOf(object)"+ Object.getOwnPropertyNames(truck.__proto__));