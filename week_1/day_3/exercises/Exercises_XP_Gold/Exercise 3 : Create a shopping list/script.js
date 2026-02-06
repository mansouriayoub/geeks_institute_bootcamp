let shoppingList=[];
        
const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.name = 'item';
input.placeholder = 'Enter item';

const addItemBtn = document.createElement('button');
addItemBtn.type = 'submit';
addItemBtn.textContent = 'AddItem';

form.appendChild(input);
form.appendChild(addItemBtn);

const div = document.getElementById('root')

div.appendChild(form);
const ol = document.createElement('ol');
div.appendChild(ol);

function addItem() {
    if (input.value !== '') {
        shoppingList.push(input.value);

        const list = document.createElement('li');

        let inputValue = input.value;

        list.textContent = inputValue[0].toUpperCase() + inputValue.slice(1);
        ol.appendChild(list);
        
        return input.value = '';
    }
}

addItemBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addItem();
})

const clearBtn = document.createElement('button');
clearBtn.type = 'button';
clearBtn.textContent = 'clearAll';

form.appendChild(clearBtn);

function clearAll(arr) {
    if (arr.length > 0) {
        arr.length = 0;
        ol.innerHTML = '';
    }
}

clearBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    clearAll(shoppingList);
})

