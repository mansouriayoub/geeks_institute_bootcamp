/*
   v Using a DOM property, retrieve the h1 and console.log it.
   v Using DOM methods, remove the last paragraph in the <article> tag.
   v Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
   v Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
   v Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
   v BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
   v BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
*/

const hed1 = document.querySelector("h1");

const article = document.querySelector("article");
article.querySelector("p:last-of-type").remove()

const hed2 = document.querySelector("h2")

hed2.addEventListener("click", function (e) {
    
 e.target.style.backgroundColor = "red";

})

const hed3 = document.querySelector("h3")

hed3.addEventListener("click", (e) => {
    e.target.style.display = "none";
})

const btn = document.querySelector("button");

btn.addEventListener('click', (e) => {
    
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(paraf => paraf.style.fontWeight = "bold")
    
    e.stopPropagation;
})

hed1.addEventListener('mouseover', (e) => {

    let randomNumber = Math.floor(Math.random() * 101);

    e.target.style.fontSize = `${randomNumber}px`;
})

/*BONUS : When you hover on the 2nd paragraph, it should fade out*/

const secondPara = article.getElementsByTagName("p")[1];

secondPara.addEventListener("mouseover", (e) => {
    
    fadeOut(e.target)

})
function fadeOut(element) {

    // element.style.opacity = 1;
    element.style.transition = 'opacity 0.05s';
    
    setTimeout(()=>{
        element.style.opacity = 0;
    }, 300)
    
}
