let inputBox = document.getElementById('inputBox');

function appendToDisplay(value) {
    inputBox.value += value;
}

function clearInput() {
    inputBox.value = '';
}

function deleteLastCharacter() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}
// Add an event listener to the "bottom-right-button"
const showMakerButton = document.querySelector('.bottom-right-button');
const makerContainer = document.querySelector('.website-maker-container');
const elementsToHide = document.querySelectorAll('.calculator-input, .calculator-buttons, .circle-container, .Calculator_icon, .bottom-buttons');

showMakerButton.addEventListener('click', () => {
    // Toggle the visibility of the specified elements and the website maker container
    elementsToHide.forEach((element) => {
        element.style.display = 'none';
    });
    makerContainer.style.display = 'block';
});


