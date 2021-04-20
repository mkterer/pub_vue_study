import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    incre(state, val) {
      state.count = state.count + val
    },
    decre(state, val) {
      state.count = state.count - val
    }
  },
  actions: {
  },
  modules: {
  }
})
