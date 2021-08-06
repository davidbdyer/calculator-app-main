const operatorKeys = ['+', '-', '*', '/', '.'];
const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
calcDisplay.answer.value.slice(-2);


const del = function () {
    const value = document.getElementById('answer').value;
    document.getElementById('answer').value = value.substr(0, value.length - 1);
}

// number keys
addEventListener("keydown", function(event){
    const { key } = event
    if (numberKeys.includes(key) === true) {
        calcDisplay.answer.value+=key
    }
})

// operator keys
addEventListener("keydown", function(event){
    const { key } = event
    if ( operatorKeys.includes(key) === true && operatorKeys.includes(calcDisplay.answer.value.slice(-1)) === false ) {
    	calcDisplay.answer.value+=key
    }
})

// Enter to equals
addEventListener("keydown", function(event){
    const { key } = event
    if (key === "Enter" && calcDisplay.answer.value !== "") {
        calcDisplay.answer.value = eval(calcDisplay.answer.value)
    }
})

// delete function
addEventListener("keydown", function(event){
    const { key } = event
    if( key === 'Backspace' || key === 'Delete' || key === 'Clear') {
        del();
    }
})

// keys to console
addEventListener("keydown", function(event){
    const { key } = event
    // console.log(key);
    console.log(key)
})

