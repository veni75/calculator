'use strict';

const input = document.querySelector('input');
let inputText;
let inputNumber = [];
let memory;
let result = {};

const writeToInput = (text) => {    
    input.value += text;
}

document
    .querySelectorAll('.number')
    .forEach(item => item.addEventListener('click', () => writeToInput(item.textContent)));

const signToMemory = (text) => {
    if (inputNumber.length === 0) {
        inputNumber.push(parseFloat(input.value));
        console.log(inputNumber[0]);
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
    inputNumber.push(parseFloat(input.value.slice(1)));
    result = {
        '+': inputNumber.reduce((prev, current) => (prev + current)),
        '-': inputNumber.reduce((prev, current) => (prev - current)),
        'x': inputNumber.reduce((prev, current) => (prev * current)),
        '÷': inputNumber.reduce((prev, current) => (prev / current)),
    }
    inputNumber.splice(0, 2, result[memory]);
    if (Number.isNaN(result[memory])) {
        input.value = 'Error';
    } else {
        input.value = result[memory];
    }
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
