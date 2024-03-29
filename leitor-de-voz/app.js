const main = document.querySelector("main");
const buttonInsertTect = document.querySelector(".btn-toggle");
const buttomReadText = document.querySelector("#read");
const divTextBox = document.querySelector(".text-box");
const closeDivTextBox = document.querySelector(".close");
const selectElement = document.querySelector("select");
const textArea = document.querySelector("textarea");

const humanExpressions = [
  { img: "./img/drink.jpg", text: "Estou com sede" },
  { img: "./img/food.jpg", text: "Estou com fome" },
  { img: "./img/tired.jpg", text: "Estou com cansado" },
  { img: "./img/hurt.jpg", text: "Estou machucado" },
  { img: "./img/happy.jpg", text: "Estou feliz" },
  { img: "./img/angry.jpg", text: "Estou com raiva" },
  { img: "./img/sad.jpg", text: "Estou triste" },
  { img: "./img/scared.jpg", text: "Estou assustado" },
  { img: "./img/outside.jpg", text: "Quero ir lá fora" },
  { img: "./img/home.jpg", text: "Quero ir para casa" },
  { img: "./img/school.jpg", text: "Quero ir para a escola" },
  { img: "./img/grandma.jpg", text: "Quero ver a vovó" },
];

const utterance = new SpeechSynthesisUtterance();

const setTextMessage = (text) => (utterance.text = text);

const speakText = () => speechSynthesis.speak(utterance);

const setVoice = (event) => {
  const selectedVoice = voices.find(
    (voice) => voice.name === event.target.value
  );
  utterance.voice = selectedVoice;
};

const addExpressionBoxesIntoDOM = () => {
  main.innerHTML = humanExpressions
    .map(
      ({ img, text }) => `
  <div class="expression-box" data-text="${text}">
    <img src="${img}" alt="${text}" data-text="${text}">
    <p class="info" data-text="${text}">${text}</p>
  </div>`
    )
    .join("");
};

addExpressionBoxesIntoDOM();

const setStyleOfClickedDiv = (dataValue) => {
  const div = document.querySelector(`[data-text="${dataValue}"]`);
  div.classList.add("active");
  setTimeout(() => {
    div.classList.remove("active");
  }, 1000);
};

// FIXME: oi

main.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const clickedElementText = clickedElement.dataset.text;
  const mustClickedElementBeSpoken = ["img", "p"].some(
    (elementName) => clickedElement.tagName === elementName.toUpperCase()
  );

  if (mustClickedElementBeSpoken) {
    setTextMessage(clickedElementText);
    speakText();
    setStyleOfClickedDiv(clickedElementText);
  }
});

const insertOptionElementsIntoDOM = (voices) => {
  selectElement.innerHTML = voices.reduce((accumulator, { name, lang }) => {
    accumulator += `<option value="${name}">${name} | ${lang}</option>`;
    return accumulator;
  }, "");
};

const setPTBRVoices = (voices) => {
  const googleVoice = voices.find(
    (voice) => voice.name === "Google português do Brasil"
  );
  const microsoftVoice = voices.find(
    (voice) => voice.name === "Microsoft Maria - Portuguese (Brazil)"
  );

  const setUtteranceVoice = (voice) => {
    utterance.voice = voice;
    const voiceOptionElement = selectElement.querySelector(
      `[value="${googleVoice.name}"]`
    );
    voiceOptionElement.selected = true;
  };

  setUtteranceVoice(googleVoice ? googleVoice : microsoftVoice);
};

let voices = [];
speechSynthesis.addEventListener("voiceschanged", () => {
  voices = speechSynthesis.getVoices();
  insertOptionElementsIntoDOM(voices);
  setPTBRVoices(voices);
});

buttonInsertTect.addEventListener("click", () =>
  divTextBox.classList.add("show")
);
closeDivTextBox.addEventListener("click", () =>
  divTextBox.classList.remove("show")
);
selectElement.addEventListener("change", setVoice);
buttomReadText.addEventListener("click", () => {
  setTextMessage(textArea.value);
  speakText();
});
