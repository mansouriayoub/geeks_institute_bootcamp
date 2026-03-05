const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random';

const gifForm = document.getElementById('gif-form');
const categoryInput = document.getElementById('category-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all-btn');

/**
 * Fetches a random GIF based on the provided category.
 * @param {string} category 
 */
async function fetchRandomGif(category) {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&tag=${category}&rating=g`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.data && result.data.images) {
            const imageUrl = result.data.images.fixed_height.url;
            addGifToPage(imageUrl, category);
        } else {
            console.error('No GIF found for this category');
            alert('No GIF found for this category. Try something else!');
        }
    } catch (error) {
        console.error('Error fetching GIF:', error);
        alert('Something went wrong while fetching the GIF. Please try again.');
    }
}

/**
 * Creates and appends a GIF card to the DOM.
 * @param {string} imageUrl 
 * @param {string} category 
 */
function addGifToPage(imageUrl, category) {
    const card = document.createElement('div');
    card.classList.add('gif-card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = category;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'DELETE';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(img);
    card.appendChild(deleteBtn);
    gifContainer.appendChild(card);
}

// Event Listeners
gifForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = categoryInput.value.trim();
    if (category) {
        fetchRandomGif(category);
        categoryInput.value = '';
    }
});

deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});
