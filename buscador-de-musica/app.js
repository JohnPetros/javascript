const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const songsContainer = document.querySelector("#songs-container");
const prevAndNextContainer = document.querySelector("#prev-and-next-container");

const apiURL = `https://api.lyrics.ovh`;

const fecthData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const getMoreSongs = async (url) => {
  console.log(url);
  const data = await fecthData(url);

  insertIntoPage(data);
};

const insertNextAndPrevButtons = ({ prev, next }) => {
  prevAndNextContainer.innerHTML = `
  ${
    prev
      ? `<button class="btn" onClick="getMoreSongs('${prev}')">Anteriores</button>`
      : ""
  }
  ${
    next
      ? `<button  class="btn" onClick="getMoreSongs('${next}')">Próximas</button>`
      : ""
  }
  `;
};

const insertIntoPage = ({ data, prev, next }) => {
  songsContainer.innerHTML = data
    .map(
      ({ artist: { name }, title }) => `
    <li class="song">
        <span class="song-artist"><strog>${name}</strog> - ${title}</span>
        <button class="btn" data-artist="${name}" data-song-title="${title}">Ver letra</button>
    </li>
  `
    )
    .join("");

  if (prev || next) {
    insertNextAndPrevButtons({ prev, next });
    return;
  }

  prevAndNextContainer.innerHTML = "";
};

const fecthSongs = async (term) => {
  const data = await fecthData(`${apiURL}/suggest/${term}`);
  insertIntoPage(data);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();
  searchInput.value = "";
  searchInput.focus();

  if (!searchTerm) {
    songsContainer.innerHTML =
      "<li class='warning-message'>Por favor, digite um termo válido</li>";
    return;
  }

  fecthSongs(searchTerm);
};

form.addEventListener("submit", handleFormSubmit);

const insertLyricsIntoPage = ({ lyrics, artist, songTitle }) => {
  songsContainer.innerHTML = `
  <li class="lyrics-container">
    <h2><strog>${songTitle}</strog> - ${artist}</h2>
    <p class="lyrics">${lyrics}</p>
  </li>
  `;
};

const fetchLyrics = async (artist, songTitle) => {
  const data = await fecthData(`${apiURL}/v1/${artist}/${songTitle}`);
  console.log(data);
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  insertLyricsIntoPage({ lyrics, artist, songTitle });

  console.log(data);
};

const handleSongsContainerClick = (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "BUTTON") {
    const artist = clickedElement.getAttribute("data-artist");
    const songTitle = clickedElement.getAttribute("data-song-title");
    console.log({ artist, songTitle });

    prevAndNextContainer.innerHTML = "";

    fetchLyrics(artist, songTitle);
  }
};

songsContainer.addEventListener("click", handleSongsContainerClick);
