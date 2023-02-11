const btn = document.querySelector('.search-icon')
const overlay = document.querySelector('.search-overlay')
const popout = document.querySelector('.search-popup')

btn.addEventListener('click', () => {
    overlay.classList.add('active')
    popout.classList.add('active')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active')
    popout.classList.remove('active')
})