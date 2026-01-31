const div = document.getElementById("container");
// console.log(div);

const secondListOfFirstUl = document.querySelector("ul li:nth-child(2)");
secondListOfFirstUl.textContent = "Richard";

const secondUl = document.querySelectorAll("ul")[1];
const secondListOfSecondUl = secondUl.children[1];
secondUl.removeChild(secondListOfSecondUl);

const allUlList = document.querySelectorAll("ul");


for (const ul of allUlList) {

    const firstLi = ul.querySelector('li');

    // console.log(firstLi);
    
    firstLi.textContent = "Eyüp";
    
}


for (const ul of allUlList) {
    
    ul.classList.add("student_list")
    
}
allUlList[0].classList.add("university","attendance");


div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// const list = document.getElementsByTagName("LI");
const lists = document.querySelectorAll("li");
// console.log(allUlList[1].lastChild);

for (const li of lists) {

    if (li.textContent.includes("Dan")) {
        // console.log(li.textContent);

        li.style.display = "none";
    }
}

for (const li of lists) {
    
    if (li.textContent.includes("Richard")) {
        // console.log(li.textContent);
        
        li.style.border = "2px solid black";
    }
}

document.body.style.fontSize = "25px";

if (div.style.backgroundColor === "lightblue") {

    const firstListOfFirstUl = document.querySelector("ul li:nth-child(1)");
    const firstUser = firstListOfFirstUl.textContent;

    const secondUl = document.querySelectorAll("ul")[1];
    const firstListOfSecondUl = secondUl.children[0];
    const secondUser = firstListOfSecondUl.textContent;

    alert(`Hello ${firstUser} and ${secondUser}`);
}