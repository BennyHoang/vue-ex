import api from '@/api/pokedex'

const state = {
  all: []
}

const getters = {
  allPokemons: state => state.all
}

const actions = {
  getAllPokemons ({ commit }) {
    api.getAllPokemons(pokemons => {
      commit('setPokemons', pokemons)
    })
  }
}

const mutations = {
  setPokemons (state, pokemons) {
    state.all = pokemons
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
