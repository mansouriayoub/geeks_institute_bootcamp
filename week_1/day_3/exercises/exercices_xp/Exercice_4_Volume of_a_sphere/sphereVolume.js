let myForm = document.getElementById('MyForm');
let radiusInput = document.getElementById('radius');
let volumeInput = document.getElementById('volume');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const radiusValue = Number(radiusInput.value);

    if(isNaN(radiusValue) || radiusValue <= 0){
        alert("You must enter a positive number");
        return;
    }

    const volumeResult = (4 / 3) * Math.PI * (radiusValue ** 3);
    volumeInput.value = volumeResult.toFixed(2);

});