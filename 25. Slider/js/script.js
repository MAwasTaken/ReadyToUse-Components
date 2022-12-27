let items = document.querySelector('.slider-item').children
let nextSlide = document.querySelector('.right-slide')
let previousSlide = document.querySelector('.left-slide')
let index = 0


nextSlide.onclick = function () {
    next('next')
}

previousSlide.onclick = function () {
    next('prev')
}

function next(direction) {

    if (direction == 'next') {
        index++

        if (index == items.length)
            index = 0

    } else {

        if (index == 0)
            index = items.length - 1
        else
            index--
    }

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
    }

    items[index].classList.add('active')
}