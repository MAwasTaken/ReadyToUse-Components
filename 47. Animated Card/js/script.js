const img = document.querySelector('img')
const icon = document.querySelector('.icons')

img.onclick = () => {
    img.classList.toggle('active')
    icon.classList.toggle('active')
}