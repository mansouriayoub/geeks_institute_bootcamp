/**
 * 🌟 Exercise 1 : Giphy API
 */

let url = "https://api.giphy.com/v1/gifs/search";


fetch(`${url}?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => response.json())
    .then(result => {
        let itemSlug = result.data.map(item => item.slug)
        console.log(itemSlug);
    });

/**
 * 🌟 Exercise 2 : Giphy API

    Instructions
    Read carefully the documention to understand all the possible queries that the URL accept.

    Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
    Make sure to check the status of the Response and to catch any occuring errors.

    Console.log the Javascript Object that you receive.
 */
const API_KEY = "wfLz3EnY97PvaqWGv8kDNmpk1r8hxWQz";

const gifyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=sun&limit=10&offset=2`;

fetch(gifyUrl)
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Log the full JavaScript object received
        console.log(data);
    })
    .catch(error => {
        // Catch and log any errors
        console.error("Error fetching data from Giphy API:", error);
    });


/**
 * 🌟 Exercise 3 : Async function

    Instructions

    Improve the program below :

    fetch("https://www.swapi.tech/api/starships/9/")
        .then(response => response.json())
        .then(objectStarWars => console.log(objectStarWars.result));

    Create an async function, that will await for the above GET request.
    The program shouldn’t contain any then() method.

    Make sure to check the status of the Response and to catch any occuring errors.
*/

const fetchStarship = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            console.log("response", response)

            let data = await response.json();
            console.log("data", data)

        } else {
            throw new Error("API - wrong link ")
        }
    } catch (err) {
        console.log("In the catch ", err)
    }
}
fetchStarship("https://www.swapi.tech/api/starships/9/")


/**
 * 🌟 Exercise 4: Analyze

    Instructions

    Analyse the code provided below - what will be the outcome?
 */
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//"calling" logs immediately, then "resolved" logs after 2 seconds.