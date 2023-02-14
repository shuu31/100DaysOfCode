const inputElement = document.querySelector('#input');
const fontBoxOne = document.querySelector('#input-one');
const fontBoxTwo = document.querySelector('#input-two');
const fontBoxThree = document.querySelector('#input-three');
const fontBoxFour = document.querySelector('#input-four')

function changeFont() {
    const getText = inputElement.value;
    
    fontBoxOne.textContent = getText;
    fontBoxTwo.textContent = getText;
    fontBoxThree.textContent = getText;
    fontBoxFour.textContent = getText;
}

inputElement.addEventListener('input', changeFont);