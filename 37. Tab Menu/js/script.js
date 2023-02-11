const indicator = document.querySelector('.indicator').children
const main = document.querySelector('.items').children

for (let i = 0; i < indicator.length; i++) {

    indicator[i].onclick = function () {

        for (let j = 0; j < indicator.length; j++) {
            indicator[j].classList.remove('active')
        }

        this.classList.add('active')

        const displayItem = this.getAttribute('data-filter')

        for (let k = 0; k < main.length; k++) {
            main[k].style.transform = 'scale(0)'

            setTimeout(() => {
                main[k].style.display = "none"
            }, 500);

            if (main[k].getAttribute('data-category') == displayItem || displayItem == "all") {
                main[k].style.transform = 'scale(1)'

                setTimeout(() => {
                    main[k].style.display = "block"
                }, 500);
            }
        }
    }
}