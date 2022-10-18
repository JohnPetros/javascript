const display = document.querySelector(".display");
const header = document.querySelector("header");
const role = document.querySelector(".role span");
const information = document.querySelector(".information");
const footer = document.querySelector("footer");
const aside = document.querySelector(".right-side");
const fields = document.querySelector(".fields");

let currentStage = 0;
let number = "";
let whiteVote = false;
let stage = stages[currentStage];
let votes = []

function startStage() {
  let fieldHTML = "";
  number = "";
  whiteVote = false;

  for (let i = 0; i < stage.fields - 1; i++) {
    if (i === 0) {
      fieldHTML += '<div class="field blink"></div>';
    } else {
    }
    fieldHTML += '<div class="field"></div>';
  }

  header.style.display = "none";
  role.innerHTML = stage.title;
  information.innerHTML = "";
  footer.style.display = "none";
  aside.innerHTML = "";
  fields.innerHTML = fieldHTML;
}

function updateDisplay() {
  console.log(number);
  let candidate = stage.candidates.filter(
    (candidate) => candidate.number === number
  );

  console.log(candidate);
  if (candidate.length > 0) {
    candidate = candidate[0];
    header.style.display = "block";
    footer.style.display = "block";
    information.innerHTML = `Nome: ${candidate.name}<br/> Partido: ${candidate.party}`;

    let photosHTML = "";
    for (let photo in candidate.photos) {
      if (candidate.photos[photo].small) {
        photosHTML += `
        <div class="image small">
            <img
            src="${candidate.photos[photo].url}"
            />
            ${candidate.photos[photo].caption}
        </div>`;
      } else {
        photosHTML += `
              <div class="image">
                  <img
                  src="${candidate.photos[photo].url}"
                  />
                  ${candidate.photos[photo].caption}
              </div>`;
      }
    }

    aside.innerHTML = photosHTML;
  } else {
    header.style.display = "block";
    footer.style.display = "block";
    information.innerHTML = `<div class="warning blink">VOTO NULO</div>`;
  }
}

function insert(num) {
  const blinkField = document.querySelector(".field.blink");
  if (blinkField) {
    blinkField.innerHTML = num;
    number = `${number}${num}`;

    blinkField.classList.remove("blink");
    if (blinkField.nextElementSibling) {
      blinkField.nextElementSibling.classList.add("blink");
    } else {
      updateDisplay();
    }
  }
}
function nullVote() {
  if (!number) {
    whiteVote = true;
    header.style.display = "block";
    footer.style.display = "block";
    fields.innerHTML = "";
    information.innerHTML = `<div class="warning blink">VOTO NULO</div>`;
  } else {
    alert("Para votar em BRANCO, não pode ter digitado nenhum número!");
  }
}
function correctVote() {
  startStage();
}
function confirmVote() {
  if (whiteVote) {
    votes.push({
        stage: stages[currentStage].title,
        vote: "branco"
    })
    console.log("Confirmando como BRANCO...");
  } else if (number.length === stage.fields) {
    votes.push({
        stage: stages[currentStage].title,
        vote: number
    })
  } else {
    return;
  }

  currentStage++;
  if (stages[currentStage]) {
    stage = stages[currentStage];
    startStage();
  } else {
    display.innerHTML = '<div class="warning bigger blink">FIM</div>'
    console.log(votes);
  }
}

startStage();
