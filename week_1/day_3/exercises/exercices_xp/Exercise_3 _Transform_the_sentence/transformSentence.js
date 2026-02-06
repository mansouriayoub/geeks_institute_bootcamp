let allBoldItems;

function getBoldItems(){

    allBoldItems = document.querySelectorAll('strong');

};

getBoldItems();

function highlight(){
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

function returnItemsToDefault(){
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    })
}

let paragraf = document.querySelector('p');
paragraf.addEventListener('mouseover',highlight);
paragraf.addEventListener('mouseout',returnItemsToDefault);