const counterElement = document.querySelector('main p');
const decreaseButtonElement = document.getElementById('decrease-button');
const resetButtonElement = document.getElementById('reset-button');
const increaseButtonElement = document.getElementById('increase-button');

let count = 0;

function increaseCount() {
    count++;
    counterElement.textContent = count;
}

function resetCount() {
    count = 0;
    counterElement.textContent = count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
        counterElement.textContent = count;
    } else if (count <= 0) {
        return;
    }
}

increaseButtonElement.addEventListener('click', increaseCount);
resetButtonElement.addEventListener('click', resetCount);
decreaseButtonElement.addEventListener('click', decreaseCount);