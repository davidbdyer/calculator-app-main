const operators = ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const equalInputs = ['Enter', '='];
const deleteInputs = ['Backspace', 'Delete', 'Clear', 'DEL'];
let inputBuffer;

const printToScreen = function () {
    calcDisplay.screen.value+=inputBuffer;
    console.log(calcDisplay.screen.value);
}

const del = function () {
    if (deleteInputs.includes(inputBuffer) && calcDisplay.screen.value !== '') {
        const value = document.getElementById('screen').value;
        document.getElementById('screen').value = value.substr(0, value.length - 1);
    }
}

const reset = function () {
    if (inputBuffer === 'RESET') {
        calcDisplay.screen.value = '';
    }
}

const operatorInput = function () {
    if ( inputBuffer === 'x') {
        inputBuffer = '*';
    }
    if ( operators.includes(inputBuffer) && !(operators.includes(calcDisplay.screen.value.slice(-1)) ) &&  (calcDisplay.screen.value !== '') ) {
        printToScreen();
    };
}

const numberInput = function () {
    if ( numbers.includes(inputBuffer) )
    printToScreen();
}

const equalInput = function () {
    if ( equalInputs.includes(inputBuffer) && calcDisplay.screen.value !== '') {
        calcDisplay.screen.value = eval(calcDisplay.screen.value)
        console.log(calcDisplay.screen.value);
    }
}

const decimalInput = function () {
    const splitArray = calcDisplay.screen.value.split(/[\*\+\-\/]/);
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