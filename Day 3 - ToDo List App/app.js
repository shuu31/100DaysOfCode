// Variables
const inputElement = document.querySelector("#input");
const submitButtonElement = document.querySelector("#button");
const unorderedListElement = document.querySelector('.list');

// Adds list item
const addList = () => {
    const getCharacterValue = inputElement.value;

    if (inputElement.value.length > 0) {
        // Creates List Item
        const createListElement = document.createElement('li');
        createListElement.innerText = getCharacterValue;
        unorderedListElement.appendChild(createListElement);
    
        // Creates Delete Button
        const createDeleteButton = document.createElement('button');
        createDeleteButton.innerText = 'Remove';
        createDeleteButton.classList.add('remove-button');
        createListElement.append(createDeleteButton);
    
        // Removes or Deletes List Item
        const removeItem = () => {
            createListElement.remove();
        }
    
        // Remove List Item When Delete Button Is Clicked
        createDeleteButton.addEventListener('click', removeItem);
    
        // Resets value
        inputElement.value = "";
    }
}

// Adds list item when enter is pressed
const addListAfterKeypress = (event) => {
    if (inputElement.value.length > 0 && event.keyCode === 13) {
        addList();
    }
}

// Event Listeners
submitButtonElement.addEventListener('click', addList);
inputElement.addEventListener('keypress', addListAfterKeypress);
