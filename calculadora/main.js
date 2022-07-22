'use strict';

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const keys = document.querySelectorAll('.displayKey')
const displayResult = document.getElementById('display')
let displayNumber = ''
let displayOperator = ''
let prevOperator = ''
let result = 0



const setKey = (event) => {
    let displayKey = event.target.textContent
    let isNumber = event.target.className.includes('number')
    let hasComma = event.target.className.includes('comma')
    let isOperator = event.target.className.includes('operator')
    if(isNumber) {
        displayNumber += displayKey
    } else if(hasComma) {
        displayNumber += '.'
    } else if(isOperator) {
        displayOperator = displayKey
    }
    display(displayKey)
}

const display = (text) => {
    displayResult.textContent += text
}

keys.forEach((key) => {
    key.addEventListener('click', setKey)
}) 

