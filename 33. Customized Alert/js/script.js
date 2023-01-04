const btn = document.querySelector('.my-btn')
const alertbox = document.querySelector('.alert-box')
const closeBtn = document.querySelector('.close-btn')
let timer

btn.addEventListener('click', () => {
    showAlertBox()
    clearTimeout(timer)
})

closeBtn.addEventListener('click', function () {
    hideAlertBox()
})

function showAlertBox() {
    alertbox.classList.remove('hide')
    alertbox.classList.add('show')

    if (alertbox.classList.contains('hidden')) {
        alertbox.classList.remove('hidden')
    }

    timer = setTimeout(() => {
        hideAlertBox()
    }, 5000);
}

function hideAlertBox() {
    alertbox.classList.remove('show')
    alertbox.classList.add('hide')
}