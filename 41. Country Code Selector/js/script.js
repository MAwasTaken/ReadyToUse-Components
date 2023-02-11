const country = document.getElementById('country')
const label = document.getElementById('select_country')

country.onchange = () => {
    label.innerHTML = country.value + ':'
}