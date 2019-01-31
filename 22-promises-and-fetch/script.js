document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
  addFormHandler()
  fetchPokemon()
}

function addFormHandler() {
  let form = document.querySelector("form");
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  })
}

function fetchPokemon() {
  let url = 'http://localhost:3000/pokemon';
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      data.forEach(renderPokemon)
    })
  })
}

function renderPokemon(pokemon) {
  let container = document.querySelector("#pokemon-container")
  let element = pokemonView(pokemon)
  container.appendChild(element)
}
