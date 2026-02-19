/**
 * Create a form like the form provided above. The form should contain three inputs:
        name,
        lastname,
        submit
    Send the data to another HTML file and display the sent data to a section tag, using the DOM.
*/

const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const lastName = form.querySelector('#lastname');
const submitBtn = form.querySelector('input[type="submit"]');

const card = document.querySelector('.form-card')

function saveData(data) {// Replace with your actual data
    localStorage.setItem('myData', data);
    window.location.href = 'view.html'; // Redirect to the second HTML file
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = nameInput.value;
    const lastNameVal = lastName.value;

    let obj = {
        name: nameVal,
        lastname: lastNameVal
    };

    const para = JSON.stringify(obj);
    saveData(para);

    form.reset();
})

