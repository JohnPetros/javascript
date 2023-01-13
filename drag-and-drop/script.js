const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

function dragstart() {
  console.log("CARD: Start dragging");
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

  this.classList.add("is-dragging");
}
function drag() {
  console.log("CARD: Is dragging");
}
function dragend() {
  console.log("CARD: Stop dragging");
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));

  this.classList.remove("is-dragging");
}

function dragenter() {}
function dragover() {
  this.classList.add("over");

  const cardBeignDragged = document.querySelector(".is-dragging");

  this.appendChild(cardBeignDragged)
}
function dragleave() {
  this.classList.remove("over");
}

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("dragleave", dragleave);
});
