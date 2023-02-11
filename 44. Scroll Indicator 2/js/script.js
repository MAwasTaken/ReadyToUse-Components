const progressSection = document.querySelector('.progress-section')
const progressBar = document.querySelector('.progress-bar')
const progressNum = document.querySelector('.progress-bar-num')

function updateProgressBar() {
    progressBar.style.height = `${getScrollPercentage()}%`
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()