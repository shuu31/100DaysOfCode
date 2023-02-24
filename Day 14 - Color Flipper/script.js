const listOfLetters = ["A", "B", "C", "D", "E", "F"];
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const buttonElement = document.getElementById('button');
const spanElement = document.querySelector('.bg-value');

function returnRandomNumberForLetter() {
    let randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}

function returnRandomNumberForNumber() {
    let randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
}

function generateColor() {
    const hexCode = [];

    while(hexCode.length < 6) {
        hexCode.push(listOfLetters[returnRandomNumberForLetter()]);
        hexCode.push(listOfNumbers[returnRandomNumberForNumber()]);
    }

    const translateToString = "#" + hexCode.toString().replaceAll(",", "");
    document.body.style.backgroundColor = translateToString;
    spanElement.innerHTML = translateToString;
    spanElement.style.color = translateToString;
}

buttonElement.addEventListener('click', generateColor);

