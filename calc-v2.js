const operators = ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const equalInputs = ['Enter', '='];
const deleteInputs = ['Backspace', 'Delete', 'Clear', 'DEL'];
let inputBuffer;
let screenBuffer = '';

const printToScreen = function () {
    screenBuffer+=inputBuffer;
    const newString = screenBuffer.replace('*', 'x');
    calcDisplay.screen.value = newString;
}

const del = function () {
    if (deleteInputs.includes(inputBuffer) && screenBuffer !== '') {
       screenBuffer = screenBuffer.toString().substr(0, screenBuffer.length - 1);
       calcDisplay.screen.value = screenBuffer;
    }
}

const reset = function () {
    if (inputBuffer === 'RESET') {
        screenBuffer = '';
        calcDisplay.screen.value = screenBuffer;
    }
}

const operatorInput = function () {
    if ( inputBuffer === 'x') {
        inputBuffer = '*';
    }
    const lastChar = screenBuffer.toString().slice(-1);
    if ( operators.includes(inputBuffer) && ( screenBuffer !== '' ) ) {
       printToScreen();
    };
}

const numberInput = function () {
    if ( numbers.includes(inputBuffer) )
    printToScreen();
}

const equalInput = function () {
    if ( equalInputs.includes(inputBuffer) && screenBuffer !== '') {
        screenBuffer = eval(screenBuffer)
        calcDisplay.screen.value = screenBuffer;
    }
}

const decimalInput = function () {
    const splitArray = screenBuffer.toString().split(/[\*\+\-\/]/);
    const lastArrayElement = splitArray[splitArray.length - 1];
    if ( ['.'].includes(inputBuffer) && !( lastArrayElement.includes('.') ) ) {
        printToScreen();
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