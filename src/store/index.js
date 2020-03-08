import Vue from 'vue'
import Vuex from 'vuex'
import navbars from './modules/navbars'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, 
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    navbars,
  }
  })
    