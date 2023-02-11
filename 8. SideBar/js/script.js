const sideBar = document.querySelector('.sideBar')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    sideBar.classList.toggle('active')
    sideBar.style.visibility = 'visible'
})