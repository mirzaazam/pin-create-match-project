function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const generateField = document.getElementById('generate-field');
    const pinGet = getPin();
    generateField.value = pinGet;

    console.log('clicked');
})