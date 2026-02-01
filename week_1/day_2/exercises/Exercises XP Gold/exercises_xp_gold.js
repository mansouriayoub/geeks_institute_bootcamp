// ===== Exercise 1
// Write a program to check whether a string is blank or not.

function isBlank(str) {
    if (typeof str === 'string' && str === '') {
        return true;
    } else {
        return false;        
    }
}

console.log(isBlank('')); //--> true
console.log(isBlank('abc')); //--> false

// ===== Exercise 2
//Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(str) {
    if (typeof str === 'string') {
        let nameArr = str.split(' ');
        let nameLength = nameArr.length;

        if(nameLength === 1) {
            return nameArr;
        }else if (nameLength === 3) {
            return `${nameArr[0]} ${nameArr[1][0].toUpperCase()}. ${nameArr[2][0].toUpperCase()}.`
        }else{
            return `${nameArr[0]} ${nameArr[1][0].toUpperCase()}.`
        }
    }else{
        return 'Write a name in string type';
    }
}

console.log(abbrevName("Robin Singh")); //--> "Robin S."
console.log(abbrevName("Rob Bale Mar")); //--> "Rob B. M."

// ===== Exercise 3
//Write a JavaScript function which takes a string as an argument and swaps the case of each character.
function swapCase(str) {
    if (typeof str === "string") {
        let strChar = str.split('');

        let result = '';
        // let result = []

        for (const str of strChar) {

            if (str === str.toLowerCase()) {
                
                result += str.toUpperCase();
                
            }else if(str === str.toUpperCase()){
             
                result += str.toLowerCase();
                
            }else{
                result += str;
            }
        }
            
            return result;
            // let strArr = result.join('')
            // return strArr;
        
    }
}
swapCase('The Quick Brown Fox');


// ===== Exercise 4
/*Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array.*/

function isOmniPresent(arr, value) {

    return arr.every(subArr =>{

        return subArr.includes(value);

        // console.log(subArr);
        
    });
}
