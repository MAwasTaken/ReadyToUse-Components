let skewed = document.querySelector('.angle')

window.addEventListener('scroll', () => {
    let value = -10 + window.scrollY / 60
    skewed.style.transform = "skewY(" + value + "deg)"
})