"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const temporaryClient = {
  name: "Otávio",
  email: "fernandoleonid@gmail.com",
  phone: "1112233445566",
  city: "Rio de Janeiro",
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

// CRUD (CREATE READ UPDATE DELETE)

// CRUD - DELETE
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

// CRUD - UPDATE
const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

// CRUD - READ
const readClient = () => getLocalStorage();

// CRUD - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  console.log(dbClient);
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isValidFields = () => {
  return document.getElementById("form").checkValidity();
};

const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
};

const saveClient = () => {
  if (isValidFields) {
    const client = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
    };
    const index = document.getElementById("name").dataset.index;
    if (index === "new") {
      createClient(client);
      closeModal();
      updateTable();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
    }
  }
};

const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const clearTable = () => {
  const rows = document.querySelectorAll("#tableClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

const fillFields = (client) => {
  document.getElementById("name").value = client.name;
  document.getElementById("email").value = client.email;
  document.getElementById("phone").value = client.phone;
  document.getElementById("city").value = client.city;
  document.getElementById("name").dataset.index = client.index;
};

const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
};

const editDelete = (event) => {
  if (event.target.type === "button") {
    const [action, index] = event.target.id.split("-");
    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm(
        `Deseja realmente excluir o cliente ${client.name}?`
      );
      if (response) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};

// Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("save").addEventListener("click", saveClient);

document
  .querySelector("#tableClient>tbody")
  .addEventListener("click", editDelete);

window.addEventListener('load', updateTable)