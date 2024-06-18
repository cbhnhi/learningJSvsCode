const view2= document.querySelector("#view2");
const view1 = document.querySelector("#view1");
view1.style.display = "none";
view2.style.display = "flex";
console.log(view2);

const createDiv = (parent, text, color) => {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor= color;
  
    
    newDiv.textContent = text;
    newDiv.style.color="black";
    newDiv.style.width= "100px";
    newDiv.style.height= "100px";
    newDiv.style.margin="10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    
    parent.append(newDiv);
}

createDiv(view2,"funLife","yellow");
const div = view2.querySelector("div");
const h2 = view2.querySelector("h2");
console.log(h2);
//syntaxt for event listeners addEventListener(event,function,useCapture)
//there are many types of events
const doSomething = () => {
    alert("do something")
}

h2.addEventListener("click", doSomething, false);
