//JSON: JS object notation is a way of formating data that is sorted in an object oriented fashion.
// A lot of other languages have adopted this format for data streaming because of its ease of use and univesality of support.

const myObj = {
    name: "Ben",
    work: "Programmer",
    occupation: "Daddy",
    poke: function(){
        console.log("Poke!");
    }
};

const sendJson = JSON.stringify(myObj);
console.log(sendJson);