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
//RESULTS ARE NOT DRAWING CONSIDER PUTTING THE NEWSEARCH OBJECT IN RESULTS VUE
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
    }

  },
  actions: {
    //this action needs to map() the itunes API result which is an array
    search({ commit }, searchQuery) {
      musicApi.get('' + searchQuery)
        .then(res => {
          console.log(res.data.results)
          commit('getResults', res.data.results)
        })
    },
    addSong({ commit }, songInfo) {
      api.post('playlist/', songInfo)
        .then(res => {
          commit('addToPlaylist', res.data)
        })
    }
  }
})
