const intro = document.querySelector('.intro')
const textLogo = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        textLogo.forEach((logo, index) => {

            setTimeout(() => {
                logo.classList.add('active')
            }, (index + 1) * 400);
        })
    })

    setTimeout(() => {

        textLogo.forEach((logo, index) => {

            setTimeout(() => {
                logo.classList.remove('active')
                logo.classList.add('fade')
            }, (index + 1) * 50);
        })
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh'
    }, 2300);
})