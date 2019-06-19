import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    issueRepo: '',
    issueType: ''
  },
  mutations: {
    save (state, { key, value }) {
      state[key] = value
    }
  }
})

export default store
