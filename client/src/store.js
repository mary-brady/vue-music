import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: ('https://itunes.apple.com/search?term='),
  timeout: 3000
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000
})
export default new Vuex.Store({
  state: {
    playlist: [],
    newSearch: {
      searchQuery: '',
      searchResults: {}
    }
  },
  mutations: {
    getResults(state, data) {
      (state.newSearch.searchResults = data)
    },
    addToPlaylist(state, data) {
      (state.playlist = data)
      console.log('addToPlaylist: ', data)
    },
    setPlaylist(state, data) {
      (state.playlist = data)
    }
  },
  actions: {
    getPlaylist({ commit }, id) {
      api.get('playlists/', id)
        .then(res => {
          commit('setPlaylist')
        })
    },
    search({ commit }, searchQuery) {
      musicApi.get('' + searchQuery)
        .then(res => {
          console.log(res.data.results)
          commit('getResults', res.data.results)
        })
    },
    addSong({ commit }, songInfo) {
      api.post('playlists/', songInfo)
        .then(res => {
          commit('addToPlaylist', res)
          console.log('res: ', res)
        })
    }
  }
})

// api.post('songs/', songInfo)
//   .then(res => {
//     console.log(res)
//     commit('addToPlaylist', res)
// dispatch('getPlaylist', state.playlist)