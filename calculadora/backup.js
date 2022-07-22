"use strict";

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const keys = document.querySelectorAll(".displayKey");
const displayResult = document.getElementById("display");
let displayNumber = "";
let displayOperator = "";
let prevOperator = "";
let result = 0;

// const calculate = (number, operator) => {
//   parseFloat(number);
//   alert(number);
//   if (operator != "") {
//     if (operator === "+") {
//       sum(number);
//     } else if (operator === "-") {
//       minus(number);
//     } else if (operator === "*") {
//       multiply(number);
//     } else if (operator === "/") {
//       divide(number);
//     } else if (operator === "=") {
//       if (prevOperator === "+") {
//         sum(number);
//       } else if (prevOperator === "-") {
//         minus(number);
//       } else if (prevOperator === "*") {
//         multiply(number);
//       } else if (prevOperator === "/") {
//         divide(number);
//         alert(result);
//         console.log(typeof number);
//         displayResult.textContent = result;
//       }
//       prevOperator = operator;
//     }

// displayNumber = ''

//     if (result === 0) {
//       result = number;
//     }
//     // console.log(number)
//   }
// };

const display = (event) => {
  let displayKey = event.target.textContent;
  let isNumber = event.target.className.includes("number");
  let hasComma = event.target.className.includes("comma");
  let isOperator = event.target.className.includes("operator");
  if (isNumber) {
    displayNumber += displayKey;
  } else if (hasComma) {
    displayNumber += ".";
  } else if (isOperator) {
    displayOperator = displayKey;
    calculate(Number(displayNumber), displayOperator);
  }
  displayResult.textContent += displayKey;
};

keys.forEach((key) => {
  key.addEventListener("click", display);
});

const calculate = (number, operator) => {
 
  alert(typeof number);
  if (operator != "") {
    if (operator == "=") {
        alert(number)
      selectOperator(number, prevOperator);
      displayResult.textContent = result;
    } else {
      selectOperator(number, operator);
    }
  }
  if (result === 0) {
    result = number;
  }
};

const selectOperator = (number, operator) => {
  if (operator === "+") {
    result += number;
  } else if (operator === "-") {
    result -= number;
  } else if (operator === "*") {
    result *= number;
  } else if (operator === "/") {
    result /= number;
  }
};















