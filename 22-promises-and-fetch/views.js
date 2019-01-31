function pokemonView(pokemon) {
  let element = document.createElement('div')
  element.className = 'card' // element.classList.push('card')
  element.dataset.id = pokemon.id
  let pokeImg = document.createElement('img')
  pokeImg.src = pokemon.sprite
  let pokeName = document.createElement('p')
  pokeName.textContent = pokemon.name
  pokeName.className = 'center-text'
  element.appendChild(pokeImg)
  element.appendChild(pokeName)
  return element
}
