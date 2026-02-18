const form = document.forms[0]

const lat1 = document.querySelector('#lat1')
const lon1 = document.querySelector('#lon1')

const lat2 = document.querySelector('#lat2')
const lon2 = document.querySelector('#lon2')

console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lon1}`
    const city2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lon2}`;

    const promises = [city1, city2];

    // const result = Promise.all(promises).then();
    // console.log(JSON.stringify(result));

    console.log(Promise.all(JSON.parse(promises)));
    
    
})