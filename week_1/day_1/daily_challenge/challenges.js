// ====== Daily Challenge Not Bad
let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");



if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {

    let result = `${sentence.slice(0, wordNot)}good${sentence.slice(wordBad + 3)}`;
    console.log(result);

} else {
    console.log(sentence);
}

// ====== Daily Challenge Stars

// first using one loop
let stars = "";
for (let i = 1; i < 5; i++) {
    stars += "*";
    console.log(stars);
}


// second using two loops
for (let i = 1; i < 5; i++) {
    stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}