import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: ('//itunes.apple.com/search?callback=?&term='),
  timeout: 3000
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
