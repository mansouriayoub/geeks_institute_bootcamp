/**
 * What You will learn :
    * Array methods
    * Conditionals

    Instructions
    Create a function that returns `true` if all parameters are truthy, and `false` otherwise.

    Examples
    allTruthy(true, true, true) ➞ true
    allTruthy(true, false, true) ➞ false
    allTruthy(5, 4, 3, 2, 1, 0) ➞ false
    */

const allTruthy = (...arr) => {

    return arr.every(item => item)

}