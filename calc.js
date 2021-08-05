const del = function () {
    const value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}