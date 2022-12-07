const progress = document.querySelector('.progress-bar')
const height = document.documentElement.scrollHeight - window.innerHeight

window.addEventListener('scroll', ()=>{
    const winScroll = window.pageYOffset
    const scrolled = (winScroll / height) * 101
    progress.style.width = `${scrolled}%`
})