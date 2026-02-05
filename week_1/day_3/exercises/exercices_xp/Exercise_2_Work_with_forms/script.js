/* 
   v 1.Retrieve the form and console.log it.
   v 2.Retrieve the inputs by their id and console.log them.
   v 3.Retrieve the inputs by their name attribute and console.log them.
   v 4.When the user submits the form (ie. submit event listener) 
   v - use event.preventDefault(), why ?
   v get the values of the input tags,
   v make sure that they are not empty,
    create an li per input value,
    then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/

const form = document.querySelector('form');

const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

// const fnameInput = document.getElementsByName("firstname");
// const lnameInput = document.getElementsByName("lastname");

const submitBtn = document.getElementById('submit');

const ul = document.querySelector('.usersAnswer');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //preventing the browser's default behavior

    const fnameInputValue = firstNameInput.value.trim();
    const lnameInputValue = lastNameInput.value.trim();

    if (fnameInputValue !== '' && lnameInputValue !== '') {
        
        const list = document.createElement('li');
        list.textContent = `${fnameInputValue} ${lnameInputValue}`;
        ul.appendChild(list);

        firstNameInput.value = '';
        lastNameInput.value = '';
        
    }else{
        alert("Please fill in both fields");
    }

})


