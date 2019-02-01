function getPokemon() {
  let url = 'http://localhost:3000/pokemon';
  return fetch(url).then(res => res.json())
}

function createPokemon(name, sprite) {
  return fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      sprite: sprite
    })
  }).then(function (response) {
    return response.json()
  })
}
