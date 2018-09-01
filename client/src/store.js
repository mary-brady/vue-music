import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: ('//itunes.apple.com/search?callback=?&term='),
  timeout: 3000
})

let api = Axios.create({
  baseURL: "//localhost:3000",
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    playlist: [],
    results: {}
  },
  mutations: {
    getResults(state, data) {
      (state.results = data)
    },
    addToPlaylist(state, data) {
      (state.playlist = data)
    }

  },
  actions: {
    search({ commit }, searchQuery) {
      musicApi.get('' + searchQuery)
        .then(res => {
          console.log(res)
          commit('getResults', res.data)
        })
    },
    addSong({ commit }, songInfo) {
      api.post('', songInfo)
        .then(res => {
          commit('addToPlaylist', res.data)

        })
    }
  }
})
