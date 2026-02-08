/**
 * Exercise 1 : Merge Words
 */

const mergeWords = (word) => {
    let result = word;
    
    return (nextWord) => {
      if (nextWord) {
        return mergeWords(`${result} ${nextWord}`);
      }else{
        return result;
      }
    }
}
mergeWords('There')('is')('no')('spoon.')();

//Below is a verbose JavaScript solution, turn this into a currying function.
function mergeWords(string) {
    return function(nextString) {
      if (nextString === undefined) {
        return string;
      } else {
        return mergeWords(string + ' ' + nextString);
      }
    }
   }

const mergeWords = string => nextString => (nextString === undefined) ? string : mergeWords(`${string} ${nextString}`);