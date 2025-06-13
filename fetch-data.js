// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to get input values and ensure they are numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Function to display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for each button
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    displayResult(divide(number1, number2));
});
