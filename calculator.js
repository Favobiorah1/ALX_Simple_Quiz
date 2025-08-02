// Get references to input fields and result display
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultDisplay = document.getElementById("calculation-result");

// Arithmetic functions
function add() {
    const [num1, num2] = getInputValues();
    if (num1 !== null && num2 !== null) {
        resultDisplay.textContent = num1 + num2;
    }
}

function subtract() {
    const [num1, num2] = getInputValues();
    if (num1 !== null && num2 !== null) {
        resultDisplay.textContent = num1 - num2;
    }
}

function multiply() {
    const [num1, num2] = getInputValues();
    if (num1 !== null && num2 !== null) {
        resultDisplay.textContent = num1 * num2;
    }
}

function divide() {
    const [num1, num2] = getInputValues();
    if (num1 !== null && num2 !== null) {
        if (num2 === 0) {
            resultDisplay.textContent = "Error: Cannot divide by zero.";
        } else {
            resultDisplay.textContent = num1 / num2;
        }
    }
}

// Helper function to get and validate input values
function getInputValues() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers in both fields.";
        return [null, null];
    }

    return [num1, num2];
}

// Attach event listeners
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
