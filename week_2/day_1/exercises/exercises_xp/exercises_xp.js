/**
 * 🌟 Exercise 1 : Scope
 */

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
/**
 * #1: variable a starts as 5, gets reassigned to 3 inside the if block, alerts 3
 * #1.2: Using const would cause an error because you can't reassign a = 3
 */

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
/**
 * #2 - First funcThree(): Alerts 0 (global variable a hasn't been modified yet)
 *    - funcTwo(): Changes global variable a from 0 to 5
 *    - Second funcThree(): Alerts 5 (global a was modified by funcTwo)
 * #2.2: Using const would cause an error in funcTwo() when trying to reassign global a
 */

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
/**
 * #3 - funcFour(): Creates global variable a with value "hello" via window.a
 *    - funcFive(): Alerts "hello" (reads the global a created by funcFour)
 */

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
/**
 * #4: Alerts "test" (local a inside funcSix shadows the global a)
 * #4.2: Using const makes no difference since no reassignment occurs, still alerts "test"
 * 
 */

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
/**
 * #5 - First alert: Alerts 5 (block-scoped variablea inside the if block)
 *    - Second alert: Alerts 2 (outer a unchanged, block-scoped a only existed inside if)
 * #5.2: Using const makes no difference since no reassignment occurs, same results
 */

/**
 * 🌟 Exercise 2 : Ternary operator
 */

const winBattle = ()=> true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

/**
 * 🌟 Exercise 3 : Is it a string ?
 */
const isString = str=>typeof str === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

/**
 * 
 * 🌟 Exercise 4 : Find the sum
 */

const sumUp = (a,b)=>a+b;

/**
 * 🌟 Exercise 5 : Kg and grams
 */
//function declaration
function kiloToGramDeclaredFunc(weightInKg){
    return `${weightInKg*1000} grams`;
}
kiloToGramDeclaredFunc(1);
//function expression
const kiloToGramExpFunc = function(weightInKg) {
    return `${weightInKg*1000} grams`;
}
kiloToGramExpFunc(1);
// Difference: Function declarations are hoisted (can be called before definition), function expressions are not

//arrow function
const kiloToGramArrowFunc = (weightInKg) => `${weightInKg*1000} grams`;
kiloToGramArrowFunc(1)

/**
 * 🌟 Exercise 6 : Fortune teller
 */

function selfInvokedFunc(numberOfChildren, partnerName, geoLocation, jobTitle) {
    const body = window.document.body;
    body.style.backgroundColor = 'white';
    body.style.font = "italic bold 50px arial,serif";

    body.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

selfInvokedFunc(2,'aya','bursa','Dev');

/**
 * 🌟 Exercise 7 : Welcome
 */
    const body = window.document.body;
    const navBar = document.createElement('nav')
    body.appendChild(navBar);

    navBar.style.display = 'block';
    navBar.style.color = 'white';
    navBar.style.textAlign = 'center';
    navBar.style.padding = '14px 16px';

(function displayUserNameAndProfilePic(name) {
    const div = document.createElement('div');
    div.textContent = `Welcome ${name}`;

    const img = document.createElement('img');
    img.src = 'https://placecats.com/neo_banana/50/50'; // placeholder image
    img.alt = `${name}'s profile`;
    img.style.borderRadius = '50%';
    img.style.marginLeft = '10px';
    
    div.appendChild(img);
    navBar.appendChild(div);
})('Neo')

/**
 * 🌟 Exercise 8 : Juice Bar
 */
//Part I:
function makeJuice(sizeOfBeverage) {
    function addIngredients(firstIngredient,secondIngredient,thirdIngredient) {
        const sentence = `The client wants a ${sizeOfBeverage} juice, containing ${firstIngredient}, ${secondIngredient} and ${thirdIngredient}`
        document.body.innerHTML += `<p>${sentence}</p>`;
    }
    addIngredients('apple','orange','strawberry');
}
makeJuice('small');

//Part II:
function makeJuice(sizeOfBeverage) {
const ingredients = [];

function addIngredients(firstIngredient,secondIngredient,thirdIngredient) {
    ingredients.push(firstIngredient,secondIngredient,thirdIngredient);
}

function displayJuice() {
    const lastIngredient = ingredients.pop();
    const sentence = `The client wants a ${sizeOfBeverage} juice, containing ${ingredients.join(', ')} and ${lastIngredient}`
    document.body.innerHTML += `<p>${sentence}</p>`;
}

addIngredients('apple','orange','strawberry');
addIngredients('banana','berries','avocado');

displayJuice();
}

makeJuice('small');


