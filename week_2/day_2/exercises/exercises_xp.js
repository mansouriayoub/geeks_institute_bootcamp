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
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors2.map((color, i) => {
    // let ordinalIndex = (i==0) ? 1 : (i === 1) ? 2 : (i === 2) ? 3 : 0
    let ordinalIndex = (i <= 2) ? i+1 : 0;
    console.log(`${i+1}${ordinal[ordinalIndex]} choice is ${color}`)
});

/*colors.map((color, i)=> {
    if (i === 0) {
        console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
    }else if (i === 1) {
        console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
    }else if (i === 2) {
        console.log(`${i+1}${ordinal[i+1]} choice is ${color}`)
    }else if (i > 2){
        console.log(`${i+1}${ordinal[0]} choice is ${color}`)
    }

});*/

/**
 * Exercise 3 : Analyzing
 */
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
//['U','S','A'] spread operator splits string into chars and puts them in an array

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//[undefined,undefined] [,,] creates an array with empty slots

/**
 * 🌟 Exercise 4 : Employees
 */

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


const welcomeStudents = users.map((user)=>{
    return `Hello ${user.firstName}`;
})

const newArrFilter = users.filter(user=>user.role === 'Full Stack Resident')


users.filter(user=>user.role === 'Full Stack Resident').map(user=>user.lastName)

/*
*🌟 Exercise 5 : Star Wars
*/

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
epic.reduce((acc, str)=>{
    return `${acc} ${str}`
})
//output: 'a long time ago in a galaxy far far away'

/**
 * 🌟 Exercise 6 : Employees #2
 */
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

const newArrFilter2 = students.filter(student=>student.isPassed == true);

//Bonus
const newArrFilter3 = students.filter(student=>student.isPassed == true).forEach(student=>{
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});