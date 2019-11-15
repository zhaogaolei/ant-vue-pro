import Vue from 'vue'
import Vuex from 'vuex'
import tab from '../store/modules/tab'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    tab
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: getters
})
