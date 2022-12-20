const button = document.querySelectorAll('a')

button.forEach((e) => {
    e.addEventListener('mouseenter', function (e) {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let span = document.createElement('span')
        span.style.left = x + 'px'
        span.style.top = y + 'px'
        this.appendChild(span)

        setTimeout(() => {
            span.remove()
        }, 1000)
    })
})

button.forEach((e) => {
    e.addEventListener('mouseleave', function (e) {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let span = document.createElement('span')
        span.style.left = x + 'px'
        span.style.top = y + 'px'
        this.appendChild(span)

        setTimeout(() => {
            span.remove()
        }, 1000)
    })
})

button.forEach((e) => {
    e.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let span = document.createElement('span')
        span.style.left = x + 'px'
        span.style.top = y + 'px'
        this.appendChild(span)

        setTimeout(() => {
            span.remove()
        }, 1000)
    })
})