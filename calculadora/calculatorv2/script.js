"use strict";

const displayDiv = document.getElementById("display");
const numbers = document.querySelectorAll('[class*=number]');
const operators = document.querySelectorAll(".operator");
let newNumber = true;
let operator, keyOperator;
let previousNumber;
let result;

const calculate = () => {
  if (operator != undefined) {
    let currentNumber = parseFloat(displayDiv.textContent.replace(",", "."));
    newNumber = true;
    if (operator == "+") {
      result = previousNumber + currentNumber;
    } else if (operator == "-") {
      result = previousNumber - currentNumber;
    } else if (operator == "*") {
      result = previousNumber * currentNumber;
    } else if (operator == "/") {
      result = previousNumber / currentNumber;
    }
    display(result);
  }
};

const display = (text) => {
  if (newNumber) {
    displayDiv.textContent = text.toLocaleString("BR");
    newNumber = false;
  } else {
    displayDiv.textContent += text.toLocaleString("BR");
  }
};

const insertNumber = (event) => display(event.target.textContent);

const selectOperator = (event) => {
  if (!newNumber) {
    keyOperator = event.target
    keyOperator.classList.add('active')
    calculate();
    newNumber = true;
    operator = event.target.textContent;
    previousNumber = parseFloat(displayDiv.textContent);
  }
};

numbers.forEach((number) => number.addEventListener("click", insertNumber));
operators.forEach((operator) =>
  operator.addEventListener("click", selectOperator)
);

const activateEqual = () => {
  calculate();
  operator = undefined;
};

document.querySelector(".equal").addEventListener("click", activateEqual);

const clearDisplay = () => (displayDiv.textContent = "");
document.getElementById("clearDisplay").addEventListener("click", clearDisplay);

const clearCalculation = () => {
  clearDisplay();
  operator = undefined;
  newNumber = true;
  previousNumber = undefined;
};
document
  .getElementById("clearCalculation")
  .addEventListener("click", clearCalculation);

const removeLastNumber = () =>
  (displayDiv.textContent = displayDiv.textContent.slice(0, -1));
document
  .getElementById("backspace")
  .addEventListener("click", removeLastNumber);

const invertSignal = () => {
  newNumber = true;
  display(displayDiv.textContent * -1);
};
document.getElementById("invert").addEventListener("click", invertSignal);

const isFloat = () => displayDiv.textContent.includes(",");
const hasNumber = () => displayDiv.textContent.length > 0;
const insertFloat = () => {
  if (!isFloat()) {
    if (hasNumber()) {
      display(",");
    } else {
      display("0,");
    }
  }
};
document.querySelector(".float").addEventListener("click", insertFloat);

const Keyboard = {
  "0": ".number-0",
  "1": ".number-1",
  "2": ".number-2",
  "3": ".number-3",
  "4": ".number-4",
  "5": ".number-5",
  "6": ".number-6",
  "7": ".number-7",
  "8": ".number-8",
  "9": ".number-9",
  "/": ".divide",
  "*": ".multiply",
  "-": ".minus",
  "+": ".plus",
  "=": ".equal",
  "Enter": ".equal",
  "Backspace": "#backspace",
  "C": "#clearDisplay",
  "Escape": "#clearCalculation",
  ",": ".float",
};

const mapKeyboard = (event) => {
  const key = event.key;

  const permitedKey = () => Object.keys(Keyboard).includes(key);
  if(permitedKey()){
      document.querySelector(Keyboard[key]).click();
  }
};
document.addEventListener("keydown", mapKeyboard);
