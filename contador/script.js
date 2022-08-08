const divNumber = document.getElementById("number");
let number = Number(divNumber.textContent);

const buttonIncrement = document.getElementById("increment");
const buttonDecrement = document.getElementById("decrement");
buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

function increment() {
  number++;
  changeNumber(number);
}
function decrement() {
  number--;
  changeNumber(number);
}

function changeNumber(num) {
  divNumber.innerHTML = String(num);
  num < 0 ? (divNumber.style.color = "red") : (divNumber.style.color = "green");
  num >= 10
    ? buttonIncrement.setAttribute("disabled", "")
    : buttonIncrement.removeAttribute("disabled");
}
