const transactionsUl = document.querySelector("#transactions");
const incomeDisplay = document.querySelector("#money-plus");
const expenseDisplay = document.querySelector("#money-minus");
const balanceDisplay = document.querySelector("#balance");
const form = document.querySelector("#form");
const inputTransactionName = document.querySelector("#text");
const inputTransactionAmount = document.querySelector("#amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);
let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

const removeTransaction = (ID) => {
  transactions = transactions.filter((transaction) => transaction.id !== ID);
  updateLocalStorage();
  init();
};

const addTransactionIntoDOM = ({ amount, name, id }) => {
  const operator = amount < 0 ? "-" : "+";
  const CSSClass = amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
     ${name} <span>${operator}R$${amountWithoutOperator}</span>
    <button class="delete-btn" onClick="removeTransaction(${id})">x</button>
  `;
  transactionsUl.prepend(li);
};

const getExpenses = (transactionsAmount) =>
  Math.abs(
    transactionsAmount
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
  ).toFixed(2);

const getIncome = (transactionsAmount) =>
  transactionsAmount
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);

const getTotal = (transactionsAmount) =>
  transactionsAmount
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);

const updateBalanceValues = () => {
  const transactionsAmount = transactions.map(({ amount }) => {
    amount;
  });
  const total = getTotal(transactionsAmount);
  const income = getIncome(transactionsAmount);
  const expense = getExpenses(transactionsAmount);

  balanceDisplay.textContent = `R$ ${total}`;
  incomeDisplay.textContent = `R$ ${income}`;
  expenseDisplay.textContent = `R$ ${expense}`;
};

const init = () => {
  transactionsUl.innerHTML = "";
  transactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();

const updateLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const generateId = () => Math.round(Math.random() * 1000);

const addToTransactionsArray = (transactionName, transactionAmout) => {
  transactions.push({
    id: generateId(),
    name: transactionName,
    amount: Number(transactionAmout),
  });
};

const cleanInputs = () => {
  inputTransactionName.value = "";
  inputTransactionAmount.value = "";
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const transactionName = inputTransactionName.value.trim();
  const transactionAmout = inputTransactionAmount.value.trim();
  const isSomeInputEmpty = transactionName === "" || transactionAmout === "";

  if (isSomeInputEmpty) {
    alert("Por favor, preencha tanto nome quanto o valor da transação");
    return;
  }

  addToTransactionsArray(transactionName, transactionAmout);
  init();
  updateLocalStorage();

  cleanInputs();
};

form.addEventListener("submit", handleFormSubmit);
