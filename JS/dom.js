// DOM - Document Object Model
//
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

//change the view
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll('.view');
console.log(sameViews); 

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i=0;i<evenDivs.length;i++)
{
    evenDivs[i].style.backgroundColor = "darkblue";
}


const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = " hi hooo";

const navbbar = document.querySelector("nav");
navbbar.innerHTML = `<h1>Hello!</h1> <p> this should allign right </p>`;
console.log(navbbar);

navbbar.style.justifyContent = "space-evenly";


view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection= "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while( view2.lastChild)
    {
        view2.lastChild.remove();
    }


    const createDivs = (parent,iter) =>
        {
            const newDiv = document.createElement("div");
            newDiv.textContent= iter;
            newDiv.style.backgroundColor = "#000";
            newDiv.style.width= "100px";
            newDiv.style.height= "100px";
            newDiv.style.margin="10px";
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "center";
            newDiv.style.alignItems = "center";
            parent.append(newDiv);

        }

        createDivs(view2,10);

        