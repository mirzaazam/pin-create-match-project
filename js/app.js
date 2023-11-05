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

//event handler for btns
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

//event handler for btn for c btn
document.getElementById('clear').addEventListener('click', function () {
    const clear = document.getElementById('typed-inputField');
    clear.value = '';
});


// alternative event handler process of backspace 
// document.getElementById('backSpace').addEventListener('click', function () {
//     const typeNumber = document.getElementById('typed-inputField');
//     const getImidiateNumberFromTypeNumberField = typeNumber.value;
//     const makeArry =  getImidiateNumberFromTypeNumberField.split('');
//     makeArry.pop();
//     const finalResult = makeArry.join('');
//     typeNumber.value = finalResult;
// });

document.getElementById('submit-btn').addEventListener('click', function(){
    //get generate input field from DOM
    const generateField = document.getElementById('generate-field');
    const generateFieldValue = generateField.value;

    //get typed input field from DOM
    const typedInputField = document.getElementById('typed-inputField');
    const typedInputFieldValue = typedInputField.value;

    //get correct or incorrect notification from DOM
    const correct = document.getElementById('correct');
    const incorrect = document.getElementById('notMatch');

    //input field clear.
    generateField.value = '';
    typedInputField.value = '';

    //this logic for correct or incorrect notification set or hide.
    if( typedInputFieldValue === generateFieldValue ){
        correct.style.display = 'block';
        incorrect.style.display = 'none';
    }

    else{
        incorrect.style.display = 'block';
        correct.style.display = 'none';
    }
});