//Arrays
const myArray = [];
//const is used to make sure the variable remains an array, but you can still use and change the contents inside the array!

myArray[0]="Ben";
myArray[1] = 1993;
myArray[2] = false;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

//last element
console.log(myArray[myArray.length-1]);

myArray.push("Home");
console.log("After push.\n"+ myArray + "\n" + myArray.length + "\n" + myArray[myArray.length-1]);

//unshift is used to put element at the beginning of the array
myArray.unshift(443);

console.log("After unshift.\n"+ myArray + "\n" + myArray.length + "\n" + myArray[myArray.length-1]);

//both undhift snf push return the new length of the array

//splice is used to remove\replace elements splice(startindex of removal, how many to remove,element to replace with)
//this can be used to put elements in the middle of an array splice(index,0,value)



