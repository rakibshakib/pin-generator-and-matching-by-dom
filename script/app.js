function getPin() {
    const pin = Math.round((Math.random() * 10000));
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function pinGenerating() {
    const pin = getPin();
    document.getElementById('pin-input').value = pin;
}
const pinButton = document.getElementById('pin-btn')
pinButton.addEventListener('click', () => {
    // pinButton.style.backgroundColor = 'yellow'
    pinGenerating();
})

document.getElementById('cal-key-pad').addEventListener('click', (e) => {
    const keyNumber = e.target.innerText;
    const calcInput = document.getElementById('cal-input');
    if (isNaN(keyNumber)) {
        if (keyNumber == 'C') {
            calcInput.value = '';
        }
    } else {
        const perviousNumber = calcInput.value;
        const newNumber = perviousNumber + keyNumber
        calcInput.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', ()=>{
    const failedNotification = document.getElementById('failed');
    const successNotification = document.getElementById('success');
    const pinValue = document.getElementById('pin-input').value;
    const inputValue = document.getElementById('cal-input').value;
    if(pinValue == inputValue){
        failedNotification.style.display = 'none';
        successNotification.style.display = 'block';
    }else{
        failedNotification.style.display = 'block';
        successNotification.style.display = 'none';
    }
})