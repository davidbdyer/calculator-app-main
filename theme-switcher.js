function setStyleSheet(url) {
    let stylesheet = document.getElementById("theme");
    stylesheet.setAttribute('href', url);
}

const checkPrefersLightMode = function () {
    const { matches } = window.matchMedia('(prefers-color-scheme: light)')
    if (matches === true) {
        setStyleSheet('theme2.css')
        document.getElementById('theme-2').checked = true;
    }
}

onload = checkPrefersLightMode();

document.addEventListener("dblclick", event => {
    event.preventDefault()
    event.stopPropagation()
  })