let color = null;
let mousedown = false;

const listOfColors = [
	"red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen",
	"green", "turquoise", "cyan", "lightskyblue", "dodgerblue", "blue",
	"darkblue", "indigo", "darkmagenta", "violet", "lightpink", "lightgray",
	"gray", "black", "white"
];

// sidebar
const sidebar = document.getElementById("sidebar");
for (const bg of listOfColors) {
	const div = document.createElement("div");
	div.style.backgroundColor = bg;
	if (bg === "black") {
        div.style.border = "1px solid white"
    };
	sidebar.appendChild(div);
}

// drawing board
const drawingBoard = document.getElementById("main");
for (let i = 0; i < 60 * 60; i++) {
	const div = document.createElement("div");
	drawingBoard.appendChild(div);
}

let body = document.getElementsByTagName("body")[0];
let colorsPalette = document.querySelectorAll("#sidebar > *");
let drawingColors = document.querySelectorAll("#main > *");
let clearBtn = document.getElementsByTagName("button")[0];

clearBtn.addEventListener("click", ()=>{
	for (let drawingColor of drawingColors) {
		drawingColor.style.backgroundColor = "white";
        color = null;
	}
});

body.addEventListener("mousedown", ()=>{
	mousedown = true;
});

body.addEventListener("mouseup", ()=>{
	mousedown = false;
});

for (let chosenColor of colorsPalette) {
	chosenColor.addEventListener("click", e =>{
		if (e.target.tagName === "BUTTON") {
            return;
        };
		color = e.target.style.backgroundColor;
	});
}

for (let drawingColor of drawingColors) {
	drawingColor.addEventListener("mousedown", e =>{
		if (color != null) {
            e.target.style.backgroundColor = color
        };
	});
	drawingColor.addEventListener("mouseover", e =>{
		if (mousedown && color != null) {
            e.target.style.backgroundColor = color
        };
	});
}
