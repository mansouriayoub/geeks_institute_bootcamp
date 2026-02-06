let form = document.getElementById('libform');

function getFormValues() {
    return {
        noun: document.getElementById('noun').value.trim(),
        adj: document.getElementById('adjective').value.trim(),
        person: document.getElementById('person').value.trim(),
        verb: document.getElementById('verb').value.trim(),
        place: document.getElementById('place').value.trim(),
    };
}

function validateValues(values) {
    const { noun, adj, person, verb, place } = values;
    if (!noun || !adj || !person || !verb || !place) {
        alert("Please fill in all the words to generate a story.");
        return false;
    }

    const lettersOnly = /^[A-Za-z\s]+$/;
    if (
        !lettersOnly.test(noun) || !lettersOnly.test(adj) || !lettersOnly.test(person) || !lettersOnly.test(verb) || !lettersOnly.test(place)
    ) {
        alert("Please use only letters (no numbers or special characters).");
        return false;
    }

    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const values = getFormValues();
    const { noun, adj, person, verb, place } = values;

    if (!validateValues(values)) {
        return;
    }

    let story = `${person} went to ${place} to ${verb} a very ${adj} ${noun}, and everyone burst into laughter.`;

    document.getElementById('story').innerText = story;

})

let shuffleBtn = document.getElementById('shuffle');

shuffleBtn.addEventListener('click', () => {
    
    const values = getFormValues();
    const { noun, adj, person, verb, place } = values;

    // if (!validateValues(values)) {
    //     return;
    // }

    let stories = [
        `One day in ${place}, ${person} tried to ${verb} a ${adj} ${noun}, and nothing went as planned.`,
        `Everyone in ${place} froze when ${person} suddenly started to ${verb} with a ${adj} ${noun}.`,
        `While visiting ${place}, ${person} discovered a ${adj} ${noun} and decided to ${verb} it for fun.`
    ];

    let randomIndex = Math.floor(Math.random() * stories.length);
    document.getElementById('story').innerText = stories[randomIndex];
});
