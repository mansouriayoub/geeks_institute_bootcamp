/**
 * Exercise 1 : Nested functions
 */
let landscape = function() {

    let result = "";
   
    let flat = function(x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = function(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
}
landscape()

// output: ____/''''\\____
//the execution order: 
// flat(4) → adds ____, mountain(4) → adds /''''\\, flat(4) → adds ____, concatenating to ____/''''\\____

let landscape = () => {

    let result = "";
   
    let flat = x=> {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = x => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
}
landscape()

/**
 * Exercise 2 : Closure
 */
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
//output: 13


/**
 * Exercise 3 : Currying
 */
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//output: 31


/**
 * Exercise 4 : Currying
 */
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//output: 17


/**
 * Exercise 5 : Composing
 */
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
/**
 * 10+1=11
 * 11+5=16
 */
//output: 16