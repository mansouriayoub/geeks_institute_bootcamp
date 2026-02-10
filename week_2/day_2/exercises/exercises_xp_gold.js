/**
 * Exercise 1 : Analyzing the map method
 */

[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });
  //Output: [2,4,6]

/**
 * Exercise 2: Analyzing the reduce method
 */
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
//output: [1,2,0,1,2,3]

/*
 * Exercise 3 : Analyze this code
 */
    const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {
        console.log(num, i);
        alert(num);
        return num * 2;
    })
//output: i returns the index of every number in arrayNum, ex: 0 is index of 1 in arrayNum

/**
 * Exercise 4 : Nested arrays
 */

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(array.flat(2)); //[1,2,3,[4],[5]]


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 

const firstArray = greeting.map(arr=>arr.join(' '));
console.log(firstArray); //output: ['Hello young grasshopper!', 'you are', 'learning fast!']

const greetingArrIntoString = firstArray.join(' ');
console.log(greetingArrIntoString); //output: Hello young grasshopper! you are learning fast!



const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result = trapped.flat(Infinity); 
console.log(result); //output: [3]
