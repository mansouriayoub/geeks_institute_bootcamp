/**
 * Create a form with two fields (name, last name) and a submit button.
 * When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
 */

const form = document.querySelector('form');
const nameVal = form.querySelector('input[type="text"]');
const lastNameVal = form.querySelector('textarea');
const submitBtn = form.querySelector('input[type="submit"]');

const card = document.querySelector('.form-card')

form.addEventListener('submit',()=>{
    const p = document.createElement('p');
    card.appendChild(p);

    p.textContent = nameVal.value;
})

