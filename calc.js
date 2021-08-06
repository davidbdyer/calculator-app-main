const operators = ['+', '-', '*', '/', '.'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const buttons = [...document.querySelectorAll('button')];
let inputBuffer;

const del = function () {
    const value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}

const printToScreen = function () {
    calcDisplay.screen.value+=inputBuffer;
    console.log(inputBuffer);
}

const mouseOperator = function () {
    if ( operators.includes(inputBuffer) === true && operators.includes(calcDisplay.screen.value.slice(-1)) === false ) {
        printToScreen();
    };

}

const mouseNumbers = function () {
    if ( numbers.includes(inputBuffer) === true )
    printToScreen();
}

// mouse input
buttons.forEach((btn) => {
    btn.addEventListener('click', function() {
        inputBuffer = btn.textContent;
        mouseOperator();
        mouseNumbers();
    })
})

// Keyboard Input
// number keys
addEventListener('keydown', function(event){
    const { key } = event
    if (numbers.includes(key) === true) {
        calcDisplay.screen.value+=key
    }
})

// operator keys
addEventListener('keydown', function(event){
    const { key } = event
    if ( operators.includes(key) === true && operators.includes(calcDisplay.screen.value.slice(-1)) === false ) {
    	calcDisplay.screen.value+=key
    }
})

// // limit decimel
// addEventListener('keydown', function(event){
//     const { key } = event
//     if ( key === '.' && calcDisplay.screen.value.includes('.') === false ) {
//     	calcDisplay.screen.value+=key
//     }
// })

// Enter to equals
addEventListener('keydown', function(event){
    const { key } = event
    if (key === 'Enter' && calcDisplay.screen.value !== '') {
        calcDisplay.screen.value = eval(calcDisplay.screen.value)
    }
})

// delete keys
addEventListener('keydown', function(event){
    const { key } = event
    if( key === 'Backspace' || key === 'Delete' || key === 'Clear') {
        del();
    }
})

// keys to console
addEventListener('keydown', function(event){
    const { key } = event
    // console.log(key);
    console.log(key)
})