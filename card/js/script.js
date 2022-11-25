const button = document.getElementById("read-button");

button.addEventListener("click", function () {
  const card = document.querySelector(".card");
  card.classList.toggle('active');

  if (card.classList.contains("active")) {
    return button.textContent = 'Read Less';
  }

  button.textContent = 'Read More';
});
