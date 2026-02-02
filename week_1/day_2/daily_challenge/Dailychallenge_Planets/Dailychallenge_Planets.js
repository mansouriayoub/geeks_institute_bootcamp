const listPlanets = document.querySelector(".listPlanets");


const listPlanetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// for (const planet of listPlanetsArray) {
    
//     const divPlanet = document.createElement("div");
//     divPlanet.classList.add("planet");
//     listPlanets.appendChild(divPlanet);

//     divPlanet.textContent = planet;
//     divPlanet.classList.add(planet.toLowerCase());

// }

const planetsArrayOfObjects = [
    {
        planetName: "Mercury",
        numberOfMoons: 0,
    },
    {
        planetName: "Venus",
        numberOfMoons: 0,
    },
    {
        planetName: "Earth",
        numberOfMoons: 1,
    },
    {
        planetName: "Mars",
        numberOfMoons: 2,
    },
    {
        planetName: "Jupiter",
        numberOfMoons: 5,
    },
    {
        planetName: "Saturn",
        numberOfMoons: 6,
    },
    {
        planetName: "Uranus",
        numberOfMoons: 4,
    },
    {
        planetName: "Neptune",
        numberOfMoons: 3,
    },
]

for (const planet of planetsArrayOfObjects) {
    const divPlanet = document.createElement("div");
    divPlanet.classList.add("planet");
    
    let planetNameVar = planet.planetName;
    divPlanet.textContent = planetNameVar;
    divPlanet.classList.add(planetNameVar.toLowerCase()); 
    
    listPlanets.appendChild(divPlanet);

    let moon = planet.numberOfMoons;
    for (let i = 0; i < moon; i++) {
        
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        divPlanet.appendChild(moonDiv);
        
            moonDiv.style.left = i * 20+"px";
            
        
    }

}


