const operators = ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const equalInputs = ['Enter', '='];
const deleteInputs = ['Backspace', 'Delete', 'Clear', 'DEL'];
let inputBuffer;
let screenBuffer = '';

const printToScreen = function () {
    calcDisplay.screen.value = screenBuffer;
}

const toScreenBuffer = function () {
    screenBuffer+=inputBuffer;
    printToScreen();
}

const del = function () {
    if (deleteInputs.includes(inputBuffer) && screenBuffer !== '') {
        screenBuffer = screenBuffer.substr(0, screenBuffer.length - 1);
    }
}

const reset = function () {
    if (inputBuffer === 'RESET') {
        screenBuffer = '';
        printToScreen();
    }
}

const operatorInput = function () {
    if ( inputBuffer === 'x') {
        inputBuffer = '*';
    }
    if ( operators.includes(inputBuffer) && !(operators.includes(screenBuffer.slice(-1)) ) &&  (screenBuffer !== '') ) {
        toScreenBuffer();
    };
}

const numberInput = function () {
    if ( numbers.includes(inputBuffer) )
    toScreenBuffer();
}

const equalInput = function () {
    if ( equalInputs.includes(inputBuffer) && screenBuffer !== '') {
        screenBuffer = eval(screenBuffer)
        printToScreen();
    }
}

const decimalInput = function () {
    const splitArray = calcDisplay.screen.value.split(/[\*\+\-\/]/);
    const lastArrayElement = splitArray[splitArray.length - 1];
    if ( ['.'].includes(inputBuffer) && !( lastArrayElement.includes('.') ) ) {
        toScreenBuffer();
    }
}

// Mouse Input
const buttons = [...document.querySelectorAll('button')];
buttons.forEach((btn) => {
    btn.addEventListener('click', function() {
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
addEventListener('keydown', function(event){
    const { key } = event
    inputBuffer = key;
    operatorInput();
    numberInput();
    decimalInput();
    equalInput();
    del();
    reset();
});