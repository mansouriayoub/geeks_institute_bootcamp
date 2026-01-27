// ===== Exercise 1

// Part I - Review about arrays

const people = ["Greg", "Mary", "Devon", "James"];

people.shift("Greg");
people[3] = "Jason";
people.push("Eyup");
people.indexOf("Mary");
people.slice(2, 4);

const people2 = people.slice();

console.log(people.indexOf("Foo"));

const last = people.pop();
console.log(last);

// Part II - Loops

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
        break;
    }
    console.log(people[i]);
}

// ===== Exercise 2

const colors = ["red", "green", "blue", "yellow", "purple"];
for (let i = 0; i < colors.length; i++) {
    if (i === 0) {
        console.log(`My ${i + 1}st choice is ${colors[i]}`);
    } else if (i === 1) {
        console.log(`My ${i + 1}nd choice is ${colors[i]}`);
    } else if (i === 2) {
        console.log(`My ${i + 1}rd choice is ${colors[i]}`);
    } else {
        console.log(`My ${i + 1}th choice is ${colors[i]}`);
    }
}

// ===== Exercise 3

let num = prompt("Enter a number");
alert(typeof num);

while (typeof num < 10) {
    num = prompt("Enter a number");
}


// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor["firstFloor"] + building.numberOfAptByFloor["thirdFloor"]);

console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent["dan"][0]);

if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["dan"][1] > building.numberOfRoomsAndRent["david"][1]) {
    building.numberOfRoomsAndRent["david"][1] = building.numberOfRoomsAndRent["david"][1] + 200;
}

// ===== Exercise 5

const family = {
    name: "Eyup",
    age: 32,
    job: "web dev",
    address: {
        city: "Casa",
        zipCode: "20200",
    },
}

for (let i in family) {
    console.log(i);
}

for (let i in family) {
    console.log(family[i]);
}

// ===== Exercise 6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let str = "";
for (let i in details) {
    str += `${i} ${details[i]} `;
}
console.log(str);

// ===== Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let arr = [];

for (let i of names) {
    arr.push(i[0]);
}

const secretSocietyName = arr.sort().join("")
console.log(secretSocietyName);


