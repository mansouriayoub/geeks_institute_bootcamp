const playSound = (dataKey)=>{
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (audio) {   
        audio.currentTime = 0;
        audio.play();
    }
}

const allKeys = document.querySelectorAll('kbd');

allKeys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        playSound(e.target.dataset.key);  
    })
})

document.addEventListener('keydown',(e)=>{

    playSound(e.keyCode);  
        
})

