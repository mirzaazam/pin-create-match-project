// create actual 4 digit value 
function getPin() {
    const pin = generatePin();
    const pinString = pin + ''; // emty string use for number to string convert

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//generate random 4 digit value
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

// click generate btn than generate pin
document.getElementById('generate-pin').addEventListener('click', function () {
    const generateField = document.getElementById('generate-field');
    const pinGet = getPin();
    generateField.value = pinGet;
})


document.getElementById('buttons').addEventListener('click', function () {
    const getNumberFromBtn = event.target.innerText;
    const typeNumber = document.getElementById('typed-inputField');
    const getImidiateNumberFromTypeNumberField = typeNumber.value;

    if (isNaN(getNumberFromBtn)) {
        if (getNumberFromBtn == '<') {
            const digit = getImidiateNumberFromTypeNumberField.split('');
            digit.pop();
            const digitremain = digit.join('');
            typeNumber.value = digitremain;
        }
    }
    else {
        const previousNumber = getImidiateNumberFromTypeNumberField + getNumberFromBtn;
        typeNumber.value = previousNumber;
    }

})

document.getElementById('clear').addEventListener('click', function () {
    const clear = document.getElementById('typed-inputField');
    clear.value = '';
});

