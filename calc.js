const del = function () {
    const value = document.getElementById('answer').value;
    document.getElementById('answer').value = value.substr(0, value.length - 1);
}

addEventListener("keypress", function(event){
    const { key } = event
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.'].includes(key) === true) {
        calcDisplay.answer.value+=key
    }
})

addEventListener("keypress", function(event){
    const { key } = event
    if (key === "Enter" && calcDisplay.answer.value !== "") {
        calcDisplay.answer.value = eval(calcDisplay.answer.value)
    }
})

addEventListener("keypress", function(event){
    const { key } = event
    if( key === 'Backspace') {
        del();
    }
})

addEventListener("keypress", function(event){
    const { key } = event
    console.log(key);
})