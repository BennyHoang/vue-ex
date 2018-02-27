const _pokemons = [
  {
    'id': 1,
    'name': 'Pikachu',
    'type': 'electricity',
    'level': 100
  },
  {
    'id': 2,
    'name': 'Charmander',
    'type': 'fire',
    'level': 50
  }
]

export default {
  getAllPokemons (cb) {
    setTimeout(() => cb(_pokemons), 100)
  }
}
