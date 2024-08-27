names = ["Isaque", "Ronald", "Alba", "Joana", "Marcelo"]

filterCharactersInput = undefined
answerContainer = undefined
namesListDisplay = undefined

document.addEventListener("DOMContentLoaded", () => {
    refreshButton = document.querySelector('button[type="submit"]')
    
    filterCharactersInput = document.querySelector('input[name="filter-option"]')
    answerContainer = document.querySelector('#answer-container')
    namesListDisplay = document.querySelector('#names-list')

    namesElements = []

    names.array.forEach(name => {
        listElement = namesListDisplay.createElement("li")
        listElement.innerHtml = name

        namesElements.array.push(listElement)
    });
})

function getAnswer() {
    filterCharacters = filterCharactersInput.value
    return names.array.every((name) => {name.includes(filterCharacters)})
}

function refreshAnswerMessage() {
    answerMessage = {
        true: 'O caractere está em todos os elementos do array',
        false: 'O caractere não está em todos os elementos do array'
    }

    answerContainer.innerHtml = answerMessage[getAnswer()]
}
