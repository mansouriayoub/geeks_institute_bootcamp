// Exercise 1 : Dog age to Human years
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
/**
 * Use a loop to find the sum of the dogs’ ages in human years.
Hint: 1 dog year equals 7 human years
*/

let sum = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  
  if (element.type === 'dog') {
    sum += element.age * 7
  }

}
console.log(sum);

/*
Using the reduce() method, find the sum of the dogs’ ages in human years.
 */

data.reduce((acc,val)=>{
  if (val.type === 'dog') {
    acc += val.age * 7
  }
  return acc
}, 0)

/**
 * Exercise 2 : Email

    Instructions

    Clean up this email to have no whitespaces. Do it in a single line (return a new string).
    */
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
userEmail3.trim();

/*Exercise 3 : Employees #3 */
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
/*
  Change the structure of the users array. 
  The user’s full name should be the key and the user’s role should be the value.
  Example: { 'Bradley Bouley': 'Full Stack Resident' }
  Hint: Step one, create an empty object. 
*/
const usersObj = {};

users.forEach((user)=>{
  let fullName = `${user.firstName} ${user.lastName}`;

  usersObj[fullName] = user.role;

})

console.log(usersObj)

/**
 * Exercise 4 : Array to Object

  Instructions

  Using this array const letters = ['x', 'y', 'z', 'z'];

  Use a for loop to get this output { x: 1, y: 1, z: 2 };

  Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
 */

  const letters = ['x', 'y', 'z', 'z'];

  let obj = {};

  for (let i = 0; i < letters.length; i++) {
    const element = letters[i];

    if (obj[element]) {
      obj[element]++
    }else{
      obj[element] = 1;
    }

  }
    
  console.log(obj);

  const result = letters.reduce((acc,val)=>{

    if (acc[val]) {
      acc[val]++
    }else{
      acc[val] = 1;
    }

    return acc;

  }, {})

  console.log(result);
  