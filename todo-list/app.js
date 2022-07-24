"use strict";

// let database = [
//   { task: "Estudar JS", status: "" },
//   { task: "Passear com o Cachorro", status: "checked" },
//   { task: "Limpar a Casa", status: "checked" },
// ];

const getDatabase = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setDatabase = (database) =>
  localStorage.setItem("todoList", JSON.stringify(database));

const createItem = (task, status, index) => {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `
    <input type="checkbox" ${status} data-index="${index}">
    <div>${task}</div>
    <input type="button" value="X" data-index="${index}">
    </label>
  `;
  document.getElementById("todoList").appendChild(item);
};

const clearTasks = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const display = () => {
  clearTasks();
  const database = getDatabase();
  database.forEach((item, index) => createItem(item.task, item.status, index));
};

const addItem = (event) => {
  const key = event.key;
  const text = event.target.value;
  if (key === "Enter") {
    const database = getDatabase();
    database.push({ task: text, status: "" });
    setDatabase(database);
    display();
    event.target.value = "";
  }
};

const removeItem = (index) => {
  const database = getDatabase();
  database.splice(index, 1);
  setDatabase(database);
  display();
};

const updateItem = (index) => {
  const database = getDatabase();
  database[index].status = database[index].status === "" ? "checked" : "";
  setDatabase(database);
  display();
};

const clickItem = (event) => {
  const element = event.target;
  const index = element.dataset.index;
  if (element.type === "button") {
    removeItem(index);
  } else if (element.type === "checkbox") {
    updateItem(index);
  }
};

document.getElementById("newItem").addEventListener("keypress", addItem);
document.getElementById("todoList").addEventListener("click", clickItem);

display();
