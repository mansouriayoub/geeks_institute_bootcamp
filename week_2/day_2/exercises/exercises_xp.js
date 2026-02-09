/**
 * 🌟 Exercise 1 : Colors
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


/**
 * 🌟 Exercise 2 : Colors #2
*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.map((color, i) => {
    // let ordinalIndex = (i==0) ? 1 : (i === 1) ? 2 : (i === 2) ? 3 : 0
    let ordinalIndex = (i <= 2) ? i+1 : 0;
    console.log(`${i+1}${ordinal[ordinalIndex]} choice is ${color}`)
});

// colors.map((color, i)=> {
    
//     if (i === 0) {
//         console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
//     }else if (i === 1) {
//         console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
//     }else if (i === 2) {
//         console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
//     }else if (i > 2){
//         console.log(`${i+1}${ordinal[0]} choice is ${color}`)
//     }

// });