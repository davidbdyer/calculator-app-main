const operators = ['+', '-', '*', '/'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const equalInputs = ['Enter', '='];
const deleteInputs = ['Backspace', 'Delete', 'Clear', 'DEL'];
let inputBuffer;

const printToScreen = function () {
    calcDisplay.screen.value+=inputBuffer;
    console.log(inputBuffer);
}

const del = function () {
    if (deleteInputs.includes(inputBuffer) === true && calcDisplay.screen.value !== '') {
        const value = document.getElementById('screen').value;
        document.getElementById('screen').value = value.substr(0, value.length - 1);
    }
}

const operatorInput = function () {
    if ( operators.includes(inputBuffer) === true && operators.includes(calcDisplay.screen.value.slice(-1)) === false ) {
        printToScreen();
    };

}

const numberInput = function () {
    if ( numbers.includes(inputBuffer) === true )
    printToScreen();
}

const equalInput = function () {
    if ( equalInputs.includes(inputBuffer) === true && calcDisplay.screen.value !== '') {
        calcDisplay.screen.value = eval(calcDisplay.screen.value)
    }
}

const decimalInput = function () {
    const splitArray = calcDisplay.screen.value.split(/[\*\+\-\/]/);
    const lastArrayElement = splitArray[splitArray.length - 1];
    if ( ['.'].includes(inputBuffer) && !( lastArrayElement.includes('.') ) ) {
        printToScreen();
        console.log(`last element fail ${lastArrayElement}`)
    } else {
        console.log(`last element ${lastArrayElement}`);
    }
}

// Mouse Input
const buttons = [...document.querySelectorAll('button')];
buttons.forEach((btn) => {
    btn.addEventListener('click', function() {
        inputBuffer = btn.textContent;
        operatorInput();
        numberInput();
        equalInput();
        del();
        decimalInput();
    })
});

// Keyboard Input
addEventListener('keydown', function(event){
    const { key } = event
    inputBuffer = key;
    operatorInput();
    numberInput();
    equalInput();
    del();
    decimalInput();
});

// keys to console
// addEventListener('keydown', function(event){
//     const { key } = event
//     // console.log(key);
//     console.log(key)
// })