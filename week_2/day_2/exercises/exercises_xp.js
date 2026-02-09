/**
 * 🌟 Exercise 1 : Colors

Instructions

Using this array :


Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.
*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color,i)=>{
    console.log(`${i+1}# choice is ${color}`);

    if (color === 'Violet') {
        console.log("Yeah");
    }else{
        console.log("No...");
    }
})
