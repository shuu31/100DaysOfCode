// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber += i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// Second example: highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// Third example: display user data

const dummyUserData = {
    firstname: 'Shuu',
    lastname: 'Wang',
    age: 17
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

// Fourt Example: statistics/ roll the dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumber.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);