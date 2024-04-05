var result = document.getElementById('result');
var currentInput = '';
var previousInput = '';
var operator = '';

function appendNumber(num) {
    currentInput += num;
    result.value = currentInput;
}

function appendOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDecimal(dot) {
    if (currentInput.indexOf('.') === -1) {
        currentInput += dot;
        result.value = currentInput;
    }
}

function calculate() {
    var num1 = parseFloat(previousInput);
    var num2 = parseFloat(currentInput);
    var output;

    switch (operator) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        default:
            break;
    }

    result.value = output;
    currentInput = output.toString();
}

function clearInput() {
    currentInput = '';
    previousInput = '';
    operator = '';
    result.value = '';
}
