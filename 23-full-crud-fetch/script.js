document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
  addFormHandler()
  renderAllPokemon()
}

function addPokemon (event) {
  event.preventDefault();
  let name = event.target.name.value
  let sprite = event.target.sprite.value
  createPokemon(name, sprite).then(renderPokemon)
}

function addFormHandler() {
  let form = document.querySelector("form");
  form.addEventListener('submit', addPokemon)
}

function renderAllPokemon() {
  getPokemon().then(function (data) {
    data.forEach(renderPokemon)
  })
}

function renderPokemon(pokemon) {
  console.log("render pokemon", pokemon)
  let container = document.querySelector("#pokemon-container")
  let element = pokemonView(pokemon)
  container.appendChild(element)
}
