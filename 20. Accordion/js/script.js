const accor = document.querySelectorAll('.accordion-title')

accor.forEach(item => {
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')

        const content = item.nextElementSibling

        if(content.style.height){
            content.style.height = null
        }else{
            content.style.height = content.scrollHeight + 'px'
        }
    })
})