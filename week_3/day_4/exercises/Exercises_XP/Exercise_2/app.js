import persons from './data.js';

/**
 * Write a function that calculates and prints the average age of all the persons in the array.

    Use the imported array and the average age function in app.js.

    Run app.js and confirm that the average age is correctly calculated and displayed.
 */

    //option 1
/*const calculateAverageAge = () => {

    const arrayLength = persons.length;

    if (arrayLength === 0) return "No people to calculate";

    let sum = 0;
    persons.forEach(person => {
        sum += person.age
    });

    const result = sum / arrayLength
    return result;

}
const average = calculateAverageAge()
console.log(`The average age is: ${average}`)
*/


    //option 2
const calculateAverageAge = () => {

    const arrayLength = persons.length;

    if (arrayLength === 0) return "No people to calculate";

    const result = persons.reduce((sum, person) => sum + person.age, 0) / arrayLength;
    return result;
}

const average = calculateAverageAge()
console.log(`The average age is: ${average}`)