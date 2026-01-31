const div = document.querySelector("#navBar");
div.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);

const uList = div.querySelector("ul")
uList.appendChild(newLi);

console.log(uList.firstElementChild.textContent)
console.log(uList.lastElementChild.textContent);