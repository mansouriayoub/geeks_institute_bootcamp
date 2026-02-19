const form = document.forms[0]

const lat1 = document.querySelector('#lat1')
const lon1 = document.querySelector('#lon1')

const lat2 = document.querySelector('#lat2')
const lon2 = document.querySelector('#lon2')

const submitFunc = async (e)=>{
    e.preventDefault();
    

    const city1 = `https://api.sunrise-sunset.org/json?lat=${lat1.value}&lng=${lon1.value}`
    const city2 = `https://api.sunrise-sunset.org/json?lat=${lat2.value}&lng=${lon2.value}`;

    const promises = [
        fetch(city1).then(res => res.json()), 
        fetch(city2).then(res => res.json())
    ];

    try {
        let result = await Promise.all(promises)
        // console.log(result[0].results.sunrise)

        const parisSunrise = document.querySelector('#parisSunrise')
        const newYorkSunrise = document.querySelector('#newYorkSunrise')

        parisSunrise.textContent = result[0].results.sunrise
        newYorkSunrise.textContent = result[1].results.sunrise
        
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', submitFunc)
