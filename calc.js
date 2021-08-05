const del = function () {
    const value = document.getElementById('answer').value;
    document.getElementById('answer').value = value.substr(0, value.length - 1);
}

addEventListener("keydown", function(event){
    const { key } = event
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.'].includes(key) === true) {
        calcDisplay.answer.value+=key
    }
})

addEventListener("keydown", function(event){
    const { key } = event
    if (key === "Enter" && calcDisplay.answer.value !== "") {
        calcDisplay.answer.value = eval(calcDisplay.answer.value)
    }
})

addEventListener("keydown", function(event){
    const { key } = event
    if( key === 'Backspace' || key === 'Delete' || key === 'Clear') {
        del();
    }
})

addEventListener("keydown", function(event){
    const { key } = event
    console.log(key);
})

