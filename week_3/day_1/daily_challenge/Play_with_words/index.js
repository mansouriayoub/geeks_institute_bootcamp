/**
 * Instructions
 * 1st daily challenge
    Create two functions. Each function should return a promise.

    The first function called makeAllCaps(), takes an array of words as an argument

    If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
    else, reject the promise with a reason.

    The second function called sortWords(), takes an array of words uppercased as an argument

    If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.

    else, reject the promise with a reason.
 * 
 */


const makeAllCaps = (arr) => {
    const promise1 = new Promise((resolve, reject) => {
        const checker = arr.every(item => typeof item === 'string');
        if (checker) {
            const upArr = arr.map(a=>a.toUpperCase())
            resolve(upArr)
        } else {
            reject("It's not an array")
        }
    })
    return promise1
}

const sortWords = (arr) => {
    const promise2 = new Promise((resolve, reject) => {

        if (arr.length > 4) {
            resolve(arr.sort())
        } else {
            reject("It's not an array")
        }
    })
    return promise2
}

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))


// 2nd daily challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
/**
 * Create three functions. The two first functions should return a promise..

    The first function is named toJs():

    this function converts the morse json string provided above to a morse javascript object.

    if the morse javascript object is empty, throw an error (use reject)
    else return the morse javascript object (use resolve)
 */  
const toJS = ()=>{
    const firstPromise = new Promise((resolve,reject)=>{
        const toObj = JSON.parse(morse)
        if (Object.keys(toObj).length === 0) {
            reject('Empty object')
        }else{
            resolve(toObj)
        }
    })
    return firstPromise;
}

/**
 * The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

    This function asks the user for a word or a sentence.

    if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    else return an array with the morse translation of the user’s word.

    if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
    if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
 */

    const toMorse = morseJS=>{
        const secondPromise = new Promise((resolve,reject)=>{
        const userPrompt = prompt('Write something').toLowerCase();

        let result = [];

            
        
            for (let char of userPrompt) {
                if (morseJS[char] === undefined) {
                    reject("character doesn’t exist in the new morse JS object")
                }else{
                    result.push(morseJS[char])
                }
            }
            resolve(result)
        })   
        return secondPromise;
    }

/**
 * The third function called joinWords(morseTranslation), takes one argument: the morse translation array

    this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

    Chain the three functions.
    Example:
    "Hello" gives you
    ....
    .
    .-..
    .-..
    ---
 */
const joinWords = (morseTranslation) =>{
    const joined = morseTranslation.join("\n")

    const para = document.createElement('pre')
    para.textContent = joined;
    document.body.appendChild(para);
}

toJS()
    .then(morseJS=>toMorse(morseJS))
    .then(result=>joinWords(result))
    .catch(err=>console.log(err))
