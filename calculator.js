function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero.");
        return undefined; // or handle the error in another way
      }
    return a/b
}

let first_Number
let second_Number
let operator


function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        console.error('Invalid operator:', operator);
        return undefined;
    }
};


let displayValue = "";

function updateDisplay(digit) {
    displayValue += digit;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue
}


function getIntegerWork() {
    for (let i = 0; i < 10; i++) {
        let button = document.getElementById("btn-" + i);
        button.addEventListener("click", function() {
            updateDisplay(i.toString());
        })
    }
}

getIntegerWork();


function getOperatorWork(operator) {
    let operatorButton = document.getElementById("btn-" + operator);
    
    if (operatorButton) {
        operatorButton.addEventListener("click", function() {
            updateDisplay(operator);
        });
    }
}

getOperatorWork("+");
getOperatorWork("-");
getOperatorWork("*");
getOperatorWork("/");


function clear() {
    let clearButton = document.getElementById("btn-clear");
    clearButton.addEventListener("click", function () {
        clearDisplay()
    })
}

clear()