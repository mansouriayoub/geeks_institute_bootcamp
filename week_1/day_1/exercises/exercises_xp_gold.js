// ===== Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7]

for (let i of numbers) {

    // if (i % 3 === 0) {
    //     console.log(i);
    // }

    // (i % 3 === 0) ? console.log(true) : console.log(false);

    console.log(i % 3 === 0);

}

// ===== Exercise 2

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let studentName = prompt("What is your name?");

if (studentName.toLowerCase() in guestList) {
    console.log(`"Hi! I'm ${studentName}, and I'm from ${guestList[studentName.toLowerCase()]}.`);

} else {
    console.log(`Hi! I'm a guest.`);

}

// ===== Exercise 3
let age = [20, 5, 12, 43, 98, 55];

let sum = 0;

for (let i = 0; i < age.length - 1; i++) {
    sum += age[i];
}
console.log(sum);

let highestAge = 0;

for (let i = 0; i < age.length; i++) {

    if (age[i] > highestAge) {
        highestAge = age[i];
    }
}
console.log(highestAge);

