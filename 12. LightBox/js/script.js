const imgBox = document.querySelectorAll('.imgBox')

imgBox.forEach(popup => popup.addEventListener('click', ()=>{
    popup.classList.toggle('active')
}))