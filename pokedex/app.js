const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () =>
  Array(150)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    );

const generateHTML = (pokemons) =>
  pokemons.reduce((accumulator, { name, id, types, sprites }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name);
    accumulator += `<ul class="card">
              <li class="card ${elementTypes[0]}">
                  <img class="card-image" alt="${name}" src="${
      sprites.front_default
    }"/>
                  <h2 class="card-title">${id}. ${name}</h2>
                  <p class="card-subtitle">${elementTypes.join(" | ")}</p>
              </li>`;

    return accumulator;
  }, "");

const insertPokemonsIntoPage = (pokemons) => {
  const ul = document.querySelector('[data-js="pokedex"]');
  ul.innerHTML = pokemons;
};

const fetchPokemon = () => {
  const pokemonPromises = generatePokemonPromises();

  Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonsIntoPage);
};

fetchPokemon();
