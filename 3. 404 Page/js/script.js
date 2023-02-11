const container = document.querySelector("#container")

window.onmousemove = function (e) {
    let x = e.clientX
    let y = e.clientY

    container.style.backgroundPositionX = x / 8 + "px"
    container.style.backgroundPositionY = y / 8 + "px"
}