/**
 * Create a form with two fields (name, last name) and a submit button.
 * When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
 */

const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const lastName = form.querySelector('#lastname');
const submitBtn = form.querySelector('input[type="submit"]');

const card = document.querySelector('.form-card')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const nameVal = nameInput.value;
    const lastNameVal = lastName.value;

    let obj = {
        name: nameVal,
        lastname: lastNameVal
    };

    const para = JSON.stringify(obj);

    const p = document.createElement('p');
    p.textContent = para;
    
    card.appendChild(p);
    
    form.reset();
})

