/**
 * Exercise 1 : HTML Form
 */
/*const form = document.querySelector('form');
const nameVal = form.querySelector('input[type="text"]').value;
const message = form.querySelector('textarea').value;
const submitBtn = form.querySelector('input[type="submit"]');

submitBtn.addEventListener('submit')*/



//🌟 => data appear at url as query param




/**
 * Exercise 2 : HTML Form #2
 */

//🌟 => with post method, the data appears in Network Tab => Payload





/**
 * Exercise 3 : JSON Mario
 */

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

const json = JSON.stringify(marioGame);
console.log(json);

const prettyObjJson = JSON.stringify(marioGame, null, 2);
console.log(prettyObjJson);
