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

const hotelCost = (numberOfNights) => {

    let userInput = prompt("How many nights are you staying at the hotel?");

    let answer = userInput * 140;

    if () {

    }

}

// ===== Exercise ...