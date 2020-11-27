'use strict';

const input = document.querySelector('input');
let inputText;
let inputNumber = [];
let memory;
let result={};

const writeToInput = (text) => {
    inputText = (input.value);
    input.value = inputText + text;
}

document
    .querySelectorAll('.number')
    .forEach(item => item.addEventListener('click', () => writeToInput(item.textContent)));

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

document
    .querySelectorAll('.sign')
    .forEach(item => item.addEventListener('click', () => signToMemory(item.textContent)));

const calculate = () => {
    inputNumber.push(parseInt(input.value.slice(1)));
    result = {
        '+': inputNumber.reduce((prev, current) => (prev + current)),
        '-': inputNumber.reduce((prev, current) => (prev - current)),
        'x': inputNumber.reduce((prev, current) => (prev * current)),
        '÷': inputNumber.reduce((prev, current) => (prev / current)),
    }
    inputNumber.splice(0, 2, result[memory]);
    input.value = result[memory];
}

document
    .querySelector('.equal')
    .addEventListener('click', calculate);

const deleteFn = () => {
    input.value = '';
    result = 0;
    inputNumber = [];
}

document
    .querySelector('.default')
    .addEventListener('click', deleteFn);    
