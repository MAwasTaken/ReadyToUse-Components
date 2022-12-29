const textArea = document.querySelector('#textarea')
const remaining = document.querySelector('#textarea-remaining')
let maxChars = 250

textArea.addEventListener('input', () => {
    const totalRemaining = maxChars - textArea.value.length

    remaining.textContent = `${totalRemaining} Characters Left`

    const color = totalRemaining <= maxChars * .1 ? 'red' : null
    remaining.style.color = color
    console.log(color)

    if (totalRemaining === 1) {
        remaining.textContent = '1 Character Left'
    }

    if (totalRemaining === 0) {
        remaining.textContent = 'Allowed Amount Is Completion'
    }
})