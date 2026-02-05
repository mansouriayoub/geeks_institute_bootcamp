// ===== Exercise 1

function getRandomNumber(min, max) {

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    for (let i = 0; i <= randomNumber; i++) {
        if (i % 2 === 0) {
            console.log("Even numbers:",i);
        }
    }

    return randomNumber;

}

const randomNumber = getRandomNumber(1, 100);
console.log("Random number:", randomNumber);


// ===== Exercise 2

function capitalizeLetters(str) {

    let evenCapitalized = "";
    let oddCapitalized = "";

    for (let i = 0; i < str.length; i++) {

        let character = str[i];

        if (i % 2 === 0) {
            evenCapitalized += character.toUpperCase();
            oddCapitalized += character.toLowerCase();
        }else{
            oddCapitalized += character.toUpperCase();
            evenCapitalized += character.toLowerCase();
        }
    }
    return [ evenCapitalized, oddCapitalized ]
}

// ===== Exercise 3

function isPalindrome(str) {

    str = str.toLowerCase();

    if (typeof str === 'string' && str !== '') {
        
        let strRev= str.split('').reverse().join('');

        if (strRev === str) {

            return true 
            
        }else{

            return false;
        
        }
    }
}

// ===== Exercise 4

function biggestNumberInArray(arrayNumbers) {

    let biggestNumber = null;

    for (let i = 0; i < arrayNumbers.length; i++) {

        const number = arrayNumbers[i];
        
        if (typeof number !== 'number' || Number.isNaN(number)) {

            continue;

        }

        if (biggestNumber === null) {
        
            biggestNumber = number;

            continue;
        
        }

        if (number > biggestNumber) {

            biggestNumber = number
        
        }

    }
    
    if (biggestNumber === null) {
        
        return 0;
    
    }

        return biggestNumber;
    
}

// ===== Exercise 5

function getUniqueElements(arr) {

    let list =[];

    arr.forEach(element => {

        if (!list.includes(element)) {
         
            list.push(element);

        }
        
    });

    return list;

}

