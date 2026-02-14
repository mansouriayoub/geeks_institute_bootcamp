/**
 * 🌟 Exercise 1 : Location

Instructions
Analyze the code below. What will be the output?
 */
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output: I am John Doe from Vnacouver, Canada. Latitude(49.2827), Longitude(-123.1207)



/**
 * 🌟 Exercise 2: Display Student Info
 */

function displayStudentInfo(objUser) {
    //destructuring
    const { first, last } = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });



/**🌟 Exercise 3: User & id
*/

const users = { user1: 18273, user2: 92833, user3: 90315 }
const arr = Object.entries(users);

const multipling = arr.map(user => [user[0], user[1] * 2]);



/**Exercise 4 : Person class

Instructions

Analyze the code below. What will be the output? */
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member); //outbput: object



/**
 * 🌟 Exercise 5 : Dog class

    Instructions

    Using the Dog class below:
 */
class Dog {
    constructor(name) {
        this.name = name;
    }
};
//   Analyze the options below. Which constructor will successfully extend the Dog class?
// 1
class Labrador extends Dog {
    constructor(name, size) {
        this.size = size;
    }
};

// 2 => this constructor will successfully extend Dog class
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

// 3
class Labrador extends Dog {
    constructor(size) {
        super(name);
        this.size = size;
    }
};

// 4
class Labrador extends Dog {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};




/**
 * 🌟 Exercise 6 : Challenges

    Evaluate these (ie True or False)
 */
// [2] === [2]  false 
// {} === {}    false 

//two separate objects living in different memory locations


// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

/**
 * Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

    Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). 
    This method takes a parameter: the sound the animal makes, 
    and returns the details of the animal (name, type and color) as well as the sound it makes.

    Create a farmerCow object that is an instance of the class Mammal. 
    The object accepts a name, a type and a color and calls the sound method that “moos” her information.
    For example: Moooo I'm a cow, named Lily and I'm brown and white
 */

    class Animal {
        constructor(name, type, color) {
            this.name = name;
            this.type = type;
            this.color = color;
        }
    }

    class Mammal extends Animal {
        constructor(name,type,color) {
            super(name,type,color)
        }
        sound(sound) {
            console.log(`${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color.join(' and ')}`);
            
        }
    }

    const farmerCow = new Mammal('Lily','cow',['brown','white'])
    farmerCow.sound('Moooo')
