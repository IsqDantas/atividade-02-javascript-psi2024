const names = ["Isaque", "Ronald", "Alba", "Joana", "Marcelo"]

const filterCharactersInput = document.querySelector('input')
const answerContainer = document.querySelector('#answer-container')
const namesListDisplay = document.querySelector('#names-list')

document.addEventListener("DOMContentLoaded", () => {
    const refreshButton = document.querySelector('button[type="submit"]')
    refreshButton.addEventListener("click", refreshAnswerMessage)

    names.forEach(name => {
        const listElement = document.createElement("li")
        listElement.innerHTML = name

        namesListDisplay.appendChild(listElement)

        console.log(listElement)
    });
})

function getAnswer() {
    const filterCharacters = filterCharactersInput.value
    return names.every((name) => name.includes(filterCharacters))
}

function refreshAnswerMessage() {
    const answerMessage = {
        true: 'O caractere está em todos os elementos do array',
        false: 'O caractere não está em todos os elementos do array'
    }

    const answerColor = {
        true: 'green',
        false: 'red'
    }

    answer = getAnswer()

    answerContainer.innerHTML = answerMessage[answer]
    answerContainer.style.color = answerColor[answer]
}
