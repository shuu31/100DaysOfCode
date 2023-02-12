// Selected HTML Elements
const inputElement = document.querySelector('#input');
const remainingCharactersElement = document.querySelector("#count");
const maxAllowedChars = inputElement.maxLength;
const buttonElement = document.querySelector("button");

// Counts how many characters there are inside the input element
function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingCharacters = maxAllowedChars - enteredTextLength;

    if (remainingCharacters <= 10) {
        remainingCharactersElement.classList.add('warning');
        inputElement.classList.add('warning');
    } else {
        remainingCharactersElement.classList.remove('warning');
        inputElement.classList.remove('warning');
    }

    remainingCharactersElement.textContent = remainingCharacters;
}

// Empties the input box
function emptyInput() {
    let getCount;

    inputElement.value = "";
    getCount = inputElement.value.length;
    remainingCharactersElement.textContent = getCount;
    remainingCharactersElement.classList.remove('warning');
    inputElement.classList.remove('warning');
}

// When a user types in the input box
inputElement.addEventListener('input', updateRemainingCharacters);

// When a user clicks the button
buttonElement.addEventListener('click', emptyInput);