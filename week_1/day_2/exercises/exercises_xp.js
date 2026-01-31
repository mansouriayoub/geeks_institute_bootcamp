// ===== Exercise 1
const displayNumbersDivisible = (divisor = 23) => {
    let outcome = 0;

    for (let num = 0; num <= 500; num++) {

        if (num % divisor === 0) {
            console.log(num);

            outcome += num;
        }

    }
    console.log(outcome);
}
displayNumbersDivisible(45);

// ===== Exercise 2
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

const shoppingList = ['banana', 'orange', 'apple'];

const myBill = () => {

    let totalPriceOFShoppingList = 0;

    for (const item of shoppingList) {

        if (item in stock && stock[item] > 0) {

            totalPriceOFShoppingList += prices[item];

            stock[item] = stock[item] - 1;


        }
    }

    return totalPriceOFShoppingList;

}

console.log(myBill());
// ===== Exercise 3

const changeEnough = (itemPrice, amountOfChange) => {


    const allValues = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;

    allValues >= itemPrice ? console.log(true) : console.log(false);

    return allValues;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));


// ===== Exercise 4

// const hotelCost = () => {

//     let userInput = prompt("How many nights are you staying at the hotel?");

//     while (userInput === "" || userInput === null || isNaN(userInput)) {
//         userInput = prompt("Please enter a valid number of nights");
//     }
//     let nights = Number(userInput);
//     return nights * 140;
// }

// hotelCost();


// const planeRideCost = () => {
//     let userInput = prompt("Where are you hiding to?");

//     while (userInput === "" || userInput === null) {

//         userInput = prompt("Please enter a valid destination");

//     }
//         let destinationPlace = userInput;

//         if (destinationPlace.toLowerCase() === "london") {
//             return 183;
//         } else if (destinationPlace.toLowerCase() === "paris") {
//             return 220;
//         } else {
//             return 300;
//         }


// }

// planeRideCost();

// const rentalCarCost = () => {

//     let userInput = prompt("How many days you are going to rent the car?");
    
//     while (userInput === "" || userInput === null || isNaN(userInput)) {
//         userInput = prompt("Please enter a valid number of days");

//     }
//         let numberOfCarRentedDays = Number(userInput);

//         let carRentCost = 40;
//         let result = numberOfCarRentedDays * carRentCost;

//         let fivePerCent = result * 0.05;

        
//         if(numberOfCarRentedDays >= 10) {
//             return result - fivePerCent;
//         }else{
//             return result;
//         }


// }
// rentalCarCost();


// const totalVacationCost = () => {
//     let hotelCostToSum = hotelCost(); 
//     let planeCostToSum = planeRideCost(); 
//     let rentalCarCostToSum = rentalCarCost() ;

//     let resultTotalVacationCost =  hotelCostToSum + planeCostToSum + rentalCarCostToSum;

//     console.log(`The car cost: $${rentalCarCostToSum}, the hotel cost: $${hotelCostToSum}, the plane tickets cost: $${planeCostToSum}`)
    
//     return resultTotalVacationCost;
// }

// totalVacationCost();

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. 
// You need to change the 3 first functions, accordingly.

const hotelCost = (numberOfNights) => {
    return numberOfNights * 140;
}
const planeRideCost = (destinationPlace) => {

        if (destinationPlace.toLowerCase() === "london") {
            return 183;
        } else if (destinationPlace.toLowerCase() === "paris") {
            return 220;
        } else {
            return 300;
        }

}
function rentalCarCost(numberOfCarRentedDays) {
        
        let carRentCost = 40;
        let result = numberOfCarRentedDays * carRentCost;

        let fivePerCent = result * 0.05;

        
        if(numberOfCarRentedDays >= 10) {
            return result - fivePerCent;
        }else{
            return result;
        }

}

const totalVacationCost = () => {

    //prompt of nights number
    let numberOfNightsPrompt = prompt("How many nights you are going to stay in the hotel?");

    while(numberOfNightsPrompt === null || numberOfNightsPrompt === "" || isNaN(numberOfNightsPrompt) ) {
        numberOfNightsPrompt = prompt("Please enter a valid number of nights?")
    }

    numberOfNightsPrompt = Number(numberOfNightsPrompt);

    //prompt of destination
    let destinationPlacePrompt = prompt("Where are you hiding to?");

    while (destinationPlacePrompt === "" || destinationPlacePrompt === null) {

        destinationPlacePrompt = prompt("Please enter a valid destination");

    }

    //prompt of car renting number
    let carRentedDaysPrompt = prompt("How many days you want the car?");

    while (carRentedDaysPrompt === "" || carRentedDaysPrompt === null || isNaN(carRentedDaysPrompt)) {

        carRentedDaysPrompt = prompt("Please enter a valid number of days");

    }
    carRentedDaysPrompt = Number(carRentedDaysPrompt);

    //prompt of total vacation cost
    let hotelCostToSum = hotelCost(numberOfNightsPrompt); 
    let planeCostToSum = planeRideCost(destinationPlacePrompt); 
    let rentalCarCostToSum = rentalCarCost(carRentedDaysPrompt);

    let resultTotalVacationCost =  hotelCostToSum + planeCostToSum + rentalCarCostToSum;

    console.log(`The car cost: $${rentalCarCostToSum}, the hotel cost: $${hotelCostToSum}, the plane tickets cost: $${planeCostToSum}`)
    
    return resultTotalVacationCost;    


} 

totalVacationCost();