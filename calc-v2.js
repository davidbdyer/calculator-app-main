const operators = ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const equalInputs = ['Enter', '='];
const deleteInputs = ['Backspace', 'Delete', 'Clear', 'DEL'];
let inputBuffer;
let screenBuffer = '';

const printToScreen = function () {
    const newString = screenBuffer.replaceAll('*', 'x');
    calcDisplay.screen.value = newString;
}

const operatorInput = function () {
    if ( inputBuffer === 'x') {
        inputBuffer = '*';
    }
    const lastChar = screenBuffer.toString().slice(-2,-1);
    if ( operators.includes(inputBuffer) && ( screenBuffer !== '' ) && !( operators.includes(lastChar) ) ) {
        screenBuffer+=` ${inputBuffer} `;
       printToScreen();
    };
}

const numberInput = function () {
    if ( numbers.includes(inputBuffer) ) {
        screenBuffer+=inputBuffer;
        printToScreen();
    }
}

const decimalInput = function () {
    const splitArray = screenBuffer.toString().split(/[\*\+\-\/]/);
    const lastArrayElement = splitArray[splitArray.length - 1];
    if ( ['.'].includes(inputBuffer) && !(lastArrayElement.includes('.')) ) {
        screenBuffer+=inputBuffer;
        printToScreen();
    }
}

const equalInput = function () {
    const lastChar = screenBuffer.toString().slice(-1);
    if ( equalInputs.includes(inputBuffer) && screenBuffer !== '' && lastChar !== '.' ) {
        screenBuffer = eval(screenBuffer)
        calcDisplay.screen.value = screenBuffer;
    }
}

const del = function() {
    const lastChar = screenBuffer.toString().slice(-1);
    if (deleteInputs.includes(inputBuffer) && screenBuffer !== '') {
        if (lastChar === ' ') {
            screenBuffer = screenBuffer.toString().substr(0, screenBuffer.length - 2);
            printToScreen();
        } else {
            screenBuffer = screenBuffer.toString().substr(0, screenBuffer.length - 1);
            printToScreen();
        }

    }
}

const reset = function () {
    if ( inputBuffer === 'RESET' || inputBuffer === 'r' ) {
        screenBuffer = '';
        calcDisplay.screen.value = screenBuffer;
    }
}

// Mouse Input
const buttons = [...document.querySelectorAll('button')];
buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
        inputBuffer = btn.textContent;
        operatorInput();
        numberInput();
        decimalInput();
        equalInput();
        del();
        reset();
    })
});

// Keyboard Input
addEventListener('keydown', function (event) {
    const { key } = event
    inputBuffer = key;
    operatorInput();
    numberInput();
    decimalInput();
    equalInput();
    del();
    reset();
});