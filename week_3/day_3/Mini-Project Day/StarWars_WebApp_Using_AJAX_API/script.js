// DOM Elements
const btn = document.getElementById('find-btn');
const infoContainer = document.getElementById('character-info');

// Function to put loading message in the DOM
const updateTitleWithLoading = () => {
    infoContainer.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        <h2>Loading...</h2>
    `;
};

// Function to handle errors visually
const updateTitleWithError = () => {
    infoContainer.innerHTML = `
        <h2 class="error-message">Oh No! That person isn't available.</h2>
    `;
};

// Function to update the DOM with character properties
const updateWithCharacter = (character, homeworldName) => {
    infoContainer.innerHTML = `
        <h2>${character.name}</h2>
        <p>Height: ${character.height}</p>
        <p>Gender: ${character.gender}</p>
        <p>Birth Year: ${character.birth_year}</p>
        <p>Home World: ${homeworldName}</p>
    `;
};

// Function to fetch Star Wars character
const fetchCharacter = async () => {
    // Start by showing loading text/icon
    updateTitleWithLoading();

    try {
        // Random number between 1 and 83 
        // Note: API doc says max 83 records, but IDs might have gaps (e.g. 17 is missing in standard swapi). 
        // We will catch errors if a character is not found.
        const randomId = Math.floor(Math.random() * 83) + 1;

        // Fetch from API
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);

        // Checking if the request is ok or not
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Swapi.tech specific checking
        if (data.message !== "ok" || !data.result) {
            throw new Error('Could not retrieve character.');
        }

        const characterData = data.result.properties;

        // Fetch homeworld data using the URL provided in character info
        const homeworldResponse = await fetch(characterData.homeworld);

        if (!homeworldResponse.ok) {
            throw new Error("Failed fetching homeworld data.");
        }

        const homeworldData = await homeworldResponse.json();

        // Homeworld swapi.tech object format
        const homeworldName = (homeworldData.result && homeworldData.result.properties)
            ? homeworldData.result.properties.name
            : "Unknown";

        // Display results to user
        updateWithCharacter(characterData, homeworldName);

    } catch (error) {
        console.error("Error fetching data:", error);
        // Show the error message UI
        updateTitleWithError();
    }
};

// Event listener
btn.addEventListener('click', fetchCharacter);
