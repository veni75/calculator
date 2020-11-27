'use strict';

const number = document.querySelectorAll('.number');
const sign = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const input = document.querySelector('input');
const torles = document.querySelector('.default');
let inputText;
let inputNumber = [];
let memory;
let result;

const writeToInput = (text) => {
    inputText = (input.value);
    input.value = inputText + text;
}
number.forEach(item => item.addEventListener('click', () => writeToInput(item.textContent)));

const signToMemory = (text) => {
    if (inputNumber.length === 0) {
        inputNumber.push(parseInt(input.value));
    } else {
        calculate();
    }
    input.value = '';
    writeToInput(text);
    memory = text;
}
sign.forEach(item => item.addEventListener('click', () => signToMemory(item.textContent)));

const calculate = () => {
    inputNumber.push(parseInt(input.value.slice(1)));
    if (memory === '+') {
        result = inputNumber.reduce((prev, current) => (prev + current));
    }
    if (memory === '-') {
        result = inputNumber.reduce((prev, current) => (prev - current));
    }
    if (memory === 'x') {
        result = inputNumber.reduce((prev, current) => (prev * current));
    }
    if (memory === '÷') {
        result = inputNumber.reduce((prev, current) => (prev / current));
    }    
    inputNumber.splice(0, 2, result);
    input.value = result;
}
equal.addEventListener('click', calculate);

const torlesfv = () => {
    input.value = '';
    result = 0;
    inputNumber = [];
}
torles.addEventListener('click', torlesfv);    
