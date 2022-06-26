import { createStore } from 'vuex'

export default createStore({
  state: {
    heightViewport: '100vh',
  },
  getters: {
  },
  mutations: {
    isHeightViewport(state) {
      return state.heightViewport = document.documentElement.clientHeight + "px";
    },
  },
  actions: {
  },
  modules: {
  }
})
