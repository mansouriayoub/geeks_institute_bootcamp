
const divContainer = document.getElementById('container');

const btn = document.querySelector('button');

function myMove() {
    const divAnimate = document.getElementById('animate');

    let currentPosition = 0;
    
    let maxPosition = divContainer.offsetWidth - divAnimate.offsetWidth;

    btn.disabled = true;

    const myInterval = setInterval(() => {

        if (currentPosition >= maxPosition) {
            
            clearInterval(myInterval)
            btn.disabled = false;

        }else{
            
            currentPosition++
            divAnimate.style.left = `${currentPosition}px`;

        }

    }, 1);

}

