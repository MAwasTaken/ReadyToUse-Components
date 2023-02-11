let header = document.querySelector('.header')
let sticky = header.offsetTop
let page = window.pageYOffset

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})