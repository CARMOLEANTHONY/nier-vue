/**
 * Vuex
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    globalDom: {}
}

const getters = {

}

const mutations = {
    globalDom: (state, newValue) => state.globalDom = newValue
}

const actions = {

}

const modules = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
