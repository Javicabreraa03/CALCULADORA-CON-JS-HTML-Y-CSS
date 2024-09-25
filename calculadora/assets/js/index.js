import {sumar,restar,multiplicar,dividir} from '../../../node_modules/@javiercm3/calculator/main.js';
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function addToInput(char) {
    document.getElementById('input').textContent += char;
}

function setOperation(operator) {
    currentOperation = operator;
    firstOperand = parseFloat(document.getElementById('input').textContent);
    document.getElementById('input').textContent = '';
}

function clearInput() {
    document.getElementById('input').textContent = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
}

function calculate() {
    secondOperand = parseFloat(document.getElementById('input').textContent);
    let result;
    switch (currentOperation) {
        case '+':
            result = sumar(firstOperand, secondOperand);
            break;
        case '-':
            result = restar(firstOperand, secondOperand);
            break;
        case '*':
            result = multiplicar(firstOperand, secondOperand);
            break;
        case '/':
            result = dividir(firstOperand, secondOperand);
            break;
        default:
            result = 'Error';
    }
    document.getElementById('input').textContent = result;
}


document.getElementById('addBtn').addEventListener('click', () => setOperation('+'));
document.getElementById('subtractBtn').addEventListener('click', () => setOperation('-'));
document.getElementById('multiplyBtn').addEventListener('click', () => setOperation('*'));
document.getElementById('divideBtn').addEventListener('click', () => setOperation('/'));

document.getElementById('sevenBtn').addEventListener('click', () => addToInput('7'));
document.getElementById('eightBtn').addEventListener('click', () => addToInput('8'));
document.getElementById('nineBtn').addEventListener('click', () => addToInput('9'));
document.getElementById('fourBtn').addEventListener('click', () => addToInput('4'));
document.getElementById('fiveBtn').addEventListener('click', () => addToInput('5'));
document.getElementById('sixBtn').addEventListener('click', () => addToInput('6'));
document.getElementById('oneBtn').addEventListener('click', () => addToInput('1'));
document.getElementById('twoBtn').addEventListener('click', () => addToInput('2'));
document.getElementById('threeBtn').addEventListener('click', () => addToInput('3'));
document.getElementById('zeroBtn').addEventListener('click', () => addToInput('0'));
document.getElementById('dotBtn').addEventListener('click', () => addToInput('.'));
document.getElementById('clearBtn').addEventListener('click', clearInput);
document.getElementById('result').addEventListener('click', calculate);
